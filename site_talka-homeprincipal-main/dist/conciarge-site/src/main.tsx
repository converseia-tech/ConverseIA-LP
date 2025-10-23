import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

function injectRaWidget() {
	try {
		console.log('[RA WIDGET] main.tsx: injectRaWidget called');
		if (typeof document === 'undefined') return;
			if (document.getElementById('ra_wc_chatbot')) {
				console.log('[RA WIDGET] main.tsx: ra_wc_chatbot element already present — will still validate widget API and create fallback if needed');
				// do not return: we still want to validate the remote widget API and
				// create a fallback button when the remote service fails (400 / websocket errors)
			}
		console.log('[RA WIDGET] main.tsx: creating widget element');
		const a = document.createElement('ra-chatbot-widget');
		a.id = 'ra_wc_chatbot';
		a.setAttribute('slug', 'Igmy600A3RzWy69rAJaZoJkZ6Yx4dwwIQkVPPNGa');
		document.body.appendChild(a);
		console.log('[RA WIDGET] main.tsx: appended widget element to body');

		const scripts = document.scripts;
		const d = scripts[scripts.length - 1];
		const r = document.createElement('script');
		r.id = 'ra_chatbot' + Math.floor(200 * Math.random());
		r.defer = true;
		r.src = 'https://sitewidget.net/chatbot-sdk.js';
				r.onload = function () {
					console.log('[RA WIDGET] main.tsx: script loaded', r.src);
				};

		if (d && d.parentElement) {
			d.parentElement.insertBefore(r, d.nextSibling);
		} else {
			document.body.appendChild(r);
		}
		const slug = 'Igmy600A3RzWy69rAJaZoJkZ6Yx4dwwIQkVPPNGa';
		const widgetApiUrl = `https://chatbot-prod.cloud.connectagroupcorp.com/api/get_widget?slug=${slug}&chatID=`;

		// Primeiro testa o endpoint do widget para detectar 400 / problemas de origin
		fetch(widgetApiUrl, { method: 'GET' })
			.then((resp) => {
				console.log('[RA WIDGET] main.tsx: widget API response status', resp.status);
				if (!resp.ok) throw new Error('widget API not ok: ' + resp.status);
				return resp.json().catch(() => null);
			})
			.then((json) => {
				// Se chegou aqui, o endpoint retornou 200 — podemos injetar o widget
				try {
					console.log('[RA WIDGET] main.tsx: widget API looks healthy, injecting script');
					const a = document.createElement('ra-chatbot-widget');
					a.id = 'ra_wc_chatbot';
					a.setAttribute('slug', slug);
					document.body.appendChild(a);

					const scripts = document.scripts;
					const d = scripts[scripts.length - 1];
					const r = document.createElement('script');
					r.id = 'ra_chatbot' + Math.floor(200 * Math.random());
					r.defer = true;
					r.src = 'https://sitewidget.net/chatbot-sdk.js';
					r.onload = function () {
						console.log('[RA WIDGET] main.tsx: script loaded', r.src);
					};

					if (d && d.parentElement) {
						d.parentElement.insertBefore(r, d.nextSibling);
					} else {
						document.body.appendChild(r);
					}
				} catch (err) {
					console.error('[RA WIDGET] main.tsx: failed injecting after API ok', err);
					createFallbackChatButton();
				}
			})
			.catch((err) => {
				console.warn('[RA WIDGET] main.tsx: widget API check failed', err);
				// Cria botão fallback para garantir que o usuário tenha um canal de contato
				createFallbackChatButton();
			});
	} catch (err) {
		// fail silently
		console.error('Failed to inject RA widget', err);
	}
}

function createFallbackChatButton() {
	try {
		if (document.getElementById('ra_fallback_chat')) return;
		console.log('[RA WIDGET] main.tsx: creating fallback chat button');
		const a = document.createElement('a');
		a.id = 'ra_fallback_chat';
		const msg = encodeURIComponent('Olá, tudo bem? Quero entender mais sobre a solução de vocês.');
		a.href = `https://api.whatsapp.com/send/?phone=558197849998&text=${msg}&type=phone_number&app_absent=0`;
		a.target = '_blank';
		a.rel = 'noopener noreferrer';
		a.setAttribute('aria-label', 'Contato via WhatsApp');
		a.style.position = 'fixed';
			a.style.right = '20px';
			a.style.bottom = '20px';
			a.style.zIndex = '99999';
			a.style.display = 'inline-flex';
			a.style.alignItems = 'center';
			a.style.justifyContent = 'center';
			a.style.width = '56px';
			a.style.height = '56px';
			a.style.padding = '0';
			a.style.background = '#00849d';
			a.style.color = '#fff';
			a.style.borderRadius = '50%';
			a.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)';
			a.style.fontWeight = '600';
			a.style.textDecoration = 'none';
			a.style.transition = 'transform 160ms ease, box-shadow 160ms ease';
			a.innerHTML = `
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M21 6.5C21 5.11929 19.8807 4 18.5 4H5.5C4.11929 4 3 5.11929 3 6.5V15.5C3 16.8807 4.11929 18 5.5 18H8V21L12.2 18H18.5C19.8807 18 21 16.8807 21 15.5V6.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			`;
			a.onmouseover = () => { a.style.transform = 'translateY(-4px)'; a.style.boxShadow = '0 10px 24px rgba(0,0,0,0.16)'; };
			a.onmouseout = () => { a.style.transform = ''; a.style.boxShadow = '0 6px 18px rgba(0,0,0,0.12)'; };

		document.body.appendChild(a);
		console.log('[RA WIDGET] main.tsx: fallback chat button added');
	} catch (err) {
		console.error('[RA WIDGET] main.tsx: failed to create fallback button', err);
	}
}

if (typeof window !== 'undefined') {
	if (document.readyState === 'loading') {
		window.addEventListener('DOMContentLoaded', injectRaWidget);
	} else {
		injectRaWidget();
	}
}

createRoot(document.getElementById("root")!).render(<App />);
