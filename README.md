# SAP Business One · Web ERP-CRM (PAC2)

Web de presentació de producte de **SAP Business One 10.0**, l'ERP amb CRM integrat de SAP per a petites i mitjanes empreses. És la continuació de la infografia de la PAC1 (*SAP Business One i Pipedrive*), traslladada a un format web responsive i publicada amb GitHub Pages.

Pràctica de la PAC2 del mòdul **0491 · Sistemes de Gestió Empresarial** (DAM1, EDUCEM, curs 2026-2027).

## Autoria

Grup de tres membres:

- Adrià Sánchez
- Elias Rodriguez
- Mario Lopez

## Enllaços

- Repositori: <https://github.com/4sanchez/erpcrm-pac2>
- Web publicada: <https://4sanchez.github.io/erpcrm-pac2/>

## Guia d'ús de la web

El menú superior és el mateix a totes les pàgines. En mòbil es desplega amb el botó de les tres ratlles.

| Pàgina | Què hi trobaràs |
| --- | --- |
| **Inici** (`index.html`) | Presentació del sistema, característiques clau (CRM, ERP i analítica), a qui s'adreça, xifres i novetats del Feature Package 2608. |
| **Funcionalitats** (`html/features.html`) | Mòduls CRM, ERP i altres; taula comparativa amb Business Central, Odoo i Pipedrive; gràfic de preus; avantatges i inconvenients. |
| **Preus** (`html/pricing.html`) | Plans orientatius (on-premise i núvol), comparativa de models de contractació, altres costos i preguntes freqüents. |
| **Suport** (`html/support.html`) | Formulari de contacte, informació de contacte i suport, mapa de la seu central de SAP a Walldorf i funcionament del suport per nivells. |

El formulari de contacte és demostratiu: GitHub Pages no pot processar formularis, així que la web valida els camps i mostra un missatge de confirmació sense enviar cap dada.

## Estructura de carpetes

```
erpcrm-pac2/
├── index.html          Portada
├── html/
│   ├── features.html   Funcionalitats
│   ├── pricing.html    Preus
│   └── support.html    Suport i contacte
├── css/
│   └── style.css       Full d'estils únic per a totes les pàgines
├── js/
│   └── main.js         Validació i missatge del formulari de contacte
├── img/                Il·lustracions pròpies en PNG (totes < 30 KB)
└── README.md
```

## Decisions tècniques

- **HTML5 semàntic**: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure` i `footer`, amb un sol `h1` per pàgina.
- **CSS extern i centralitzat** a `css/style.css`, organitzat per seccions i amb variables (colors, radis, ombres). Cap estil en línia.
- **Responsive mobile-first** amb CSS Grid i dos punts de tall (560 px i 880 px). El menú mòbil funciona només amb CSS.
- **Rutes relatives** a tots els enllaços, fulls d'estil i imatges, perquè la web funcioni igual en local i a GitHub Pages.
- **Imatges optimitzades**: il·lustracions dibuixades per a aquesta web i exportades a PNG; la més gran pesa 25 KB.
- **Accessibilitat**: textos alternatius a totes les imatges, enllaç per saltar al contingut, focus visible, etiquetes `label` a tots els camps del formulari, taules amb `scope` i contrast de color adequat.
- El **mapa** és d'OpenStreetMap (sense clau d'API).

## Publicació a GitHub Pages

1. Crear el repositori públic `erpcrm-pac2` a GitHub.
2. Pujar tot el contingut d'aquesta carpeta (amb `index.html` a l'arrel).
3. A *Settings > Pages*, triar la branca `main` i la carpeta `/ (root)`.
4. Esperar uns minuts i obrir la URL generada.
5. Comprovar la navegació entre pàgines, les imatges, el mapa i el formulari, en mòbil i en escriptori.

## Fonts del contingut

- SAP: [SAP Business One](https://www.sap.com/spain/products/erp/business-one.html) i [SAP Learning](https://learning.sap.com/)
- Novetats del Feature Package 2608: blogs de partners de SAP Business One (2026)
- Preus orientatius: ERP Research i CostBench (2026); Pipedrive i Microsoft (webs oficials)
- Infografia pròpia de la PAC1 (punt de partida del contingut)

SAP i SAP Business One són marques registrades de SAP SE. Aquesta web és un treball acadèmic sense relació comercial amb SAP.

## Valoració de l'experiència

Aquesta pràctica ens ha servit per passar d'una infografia estàtica a una web completa: planificar l'estructura de pàgines, escriure contingut propi a partir de la recerca de la PAC1 i maquetar-lo seguint una maqueta donada. El que més temps ha demanat ha estat el comportament responsive (menú mòbil, taules amb desplaçament horitzontal i graelles que canvien de columnes) i contrastar els preus, perquè SAP no els publica i cada font dona xifres diferents. També hem après a publicar un projecte estàtic amb GitHub Pages i a revisar l'accessibilitat abans de lliurar.
