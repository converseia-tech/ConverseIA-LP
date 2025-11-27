"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link as LinkIcon, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.15) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 30);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-purple-600 border-purple-400";
      case "in-progress":
        return "text-white bg-blue-600 border-blue-400";
      case "pending":
        return "text-white bg-amber-600 border-amber-400";
      default:
        return "text-white bg-background/40 border-white/50";
    }
  };

  const handleArrowHover = (direction: "left" | "right") => {
    setAutoRotate(false);

    // Find the node currently closest to the "active" position (270 degrees)
    // or use the currently active node if one exists
    let currentIndex = -1;

    if (activeNodeId !== null) {
      currentIndex = timelineData.findIndex((item) => item.id === activeNodeId);
    } else {
      // Find the node closest to 270 degrees based on current rotation
      let minDiff = 360;

      timelineData.forEach((item, index) => {
        const angle = ((index / timelineData.length) * 360 + rotationAngle) % 360;
        // Normalize angle to 0-360
        const normalizedAngle = angle < 0 ? angle + 360 : angle;
        const diff = Math.abs(normalizedAngle - 270);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = index;
        }
      });
    }

    if (currentIndex === -1) currentIndex = 0;

    // Calculate next index
    let nextIndex;
    if (direction === "right") {
      nextIndex = (currentIndex + 1) % timelineData.length;
    } else {
      nextIndex = (currentIndex - 1 + timelineData.length) % timelineData.length;
    }

    const nextId = timelineData[nextIndex].id;

    // Only toggle if it's not already the active one
    if (activeNodeId !== nextId) {
      // We need to force expand, so we can't just use toggleItem if it might collapse
      // But toggleItem logic handles "if (!prev[id])" -> expand.
      // If we are switching to a NEW id, it will be !prev[newId] (true), so it expands.
      toggleItem(nextId);
    }
  };

  return (
    <div
      className="w-full h-[750px] flex flex-col items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-purple-400/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-purple-400/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md"></div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-purple-400/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1`}
                  style={{
                    background: `radial-gradient(circle, rgba(168,85,247,0.2) 0%, rgba(168,85,247,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-purple-500 text-white"
                      : isRelated
                      ? "bg-purple-400/50 text-white"
                      : "bg-card text-foreground"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-purple-400 shadow-lg shadow-purple-500/30"
                      : isRelated
                      ? "border-purple-400"
                      : "border-border"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={20} weight="fill" />
                </div>

                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-foreground scale-125" : "text-muted-foreground"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-80 bg-card/95 backdrop-blur-xl border-border shadow-2xl shadow-purple-500/20 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-purple-400/50"></div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-center mb-2">
                        <Badge
                          className={`px-2 py-1 text-xs font-bold ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.category}
                        </Badge>
                        <span className="text-xs font-mono text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-base font-bold text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-4">
                      <p className="leading-relaxed">{item.content}</p>

                      <div className="pt-3 border-t border-border">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center font-semibold text-foreground">
                            <Zap size={12} className="mr-1.5 text-purple-400" />
                            Relevância
                          </span>
                          <span className="font-mono text-purple-400">{item.energy}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="pt-3 border-t border-border">
                          <div className="flex items-center mb-2">
                            <LinkIcon size={12} className="text-muted-foreground mr-1.5" />
                            <h4 className="text-xs uppercase tracking-wider font-semibold text-foreground">
                              Soluções Relacionadas
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-7 px-3 py-0 text-xs rounded-lg border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 text-foreground hover:text-purple-400 transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={10}
                                    className="ml-1.5 text-purple-400"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 md:left-0 z-50 p-3 rounded-full text-purple-400 transition-all hover:scale-110 hover:bg-purple-500/10 group"
          onClick={(e) => {
            e.stopPropagation();
            handleArrowHover("left");
          }}
        >
          <ChevronLeft size={32} className="opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>

        <button
          className="absolute right-4 md:right-0 z-50 p-3 rounded-full text-purple-400 transition-all hover:scale-110 hover:bg-purple-500/10 group"
          onClick={(e) => {
            e.stopPropagation();
            handleArrowHover("right");
          }}
        >
          <ChevronRight size={32} className="opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>
    </div>
  );
}
