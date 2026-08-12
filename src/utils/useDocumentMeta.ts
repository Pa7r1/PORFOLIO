import { useEffect } from "react";

interface DocMeta {
  title: string;
  description?: string;
}

const defaultTitle = "Patricio Carpio — Fullstack Developer";
const defaultDesc  = "Full Stack Developer — TypeScript, React, Node.js y PostgreSQL. Sistemas en producción con usuarios reales. Disponible para posiciones remotas.";

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setOg(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function useDocumentMeta({ title, description }: DocMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    const fullTitle = `${title} — Patricio Carpio`;
    const desc = description ?? defaultDesc;

    document.title = fullTitle;
    setMeta("description", desc);
    setOg("og:title", fullTitle);
    setOg("og:description", desc);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);

    return () => {
      document.title = prevTitle || defaultTitle;
      setMeta("description", defaultDesc);
      setOg("og:title", defaultTitle);
      setOg("og:description", defaultDesc);
      setMeta("twitter:title", defaultTitle);
      setMeta("twitter:description", defaultDesc);
    };
  }, [title, description]);
}
