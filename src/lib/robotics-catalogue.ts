// AGIBOT catalogue reference data. Disputed values withheld or qualified for publication.
export const productIds:string[]=[
  "a3-ultra",
  "a3",
  "a2-ultra",
  "a2-lite",
  "x2-ultra",
  "x2",
  "g2",
  "d1-maxpro",
  "d1-max",
  "d1-ultra",
  "d1-pro",
  "d1-edu",
  "c5",
  "omnihand-pro",
  "omnihand",
  "omnihand-3-lite",
  "omnipicker-3",
  "vr-kit"
];
export const products=[
  {
    "id": "a3-ultra",
    "cat": "humanoid",
    "name": "AGIBOT A3 Ultra",
    "badge": {
      "en": "New",
      "de": "Neu"
    },
    "tagline": {
      "en": "Full-size humanoid for reception, retail and research",
      "de": "Humanoid in voller Größe für Empfang, Handel und Forschung"
    },
    "desc": {
      "en": "The A3 Ultra (\"Expedition A3 Ultra\") is AGIBOT's newest full-size general-purpose humanoid. 174 cm tall, 51 active degrees of freedom, a 1152 Wh dual-battery system for up to eight hours under the manufacturer’s equal walking/standing test condition, and direct, swap or autonomous charging for project-specific use in reception, retail, inspection and research settings.",
      "de": "Der A3 Ultra („Expedition A3 Ultra“) ist AGIBOTs neuester humanoider Allzweckroboter in voller Größe. 174 cm hoch, 51 aktive Freiheitsgrade, ein 1152-Wh-Doppelakkusystem für bis zu acht Stunden unter der Hersteller-Testbedingung mit gleichen Geh- und Stehanteilen sowie Laden per Kabel, Akkuwechsel oder autonomer Ladestation für den projektbezogenen Einsatz in Empfang, Handel, Inspektion und Forschung."
    },
    "highlights": {
      "en": [
        "Manufacturer-stated runtime up to 8 h with equal walking and standing; actual runtime depends on use and configuration",
        "51 active DOF: 7 per arm, 6 per leg, 3 waist, 2 neck; dexterous hands with 10 DOF (up to 20 optional)",
        "3D LiDAR, two RGB-D cameras, binocular and surround-view RGB, GPS/RTK and UWB positioning",
        "NVIDIA Thor compute board plus two RK3588 controllers; AGIBOT quotes 700 TOPS",
        "5 kg payload per arm, 320 N·m peak knee torque, up to 1.8 m/s daily walking speed",
        "Secondary development supported (AimDK); OTA updates and handheld wireless terminal"
      ],
      "de": [
        "Herstellerangabe: bis zu 8 h Laufzeit bei gleichen Geh- und Stehanteilen; tatsächliche Laufzeit abhängig von Einsatz und Konfiguration",
        "51 aktive Freiheitsgrade: 7 je Arm, 6 je Bein, 3 Hüfte, 2 Hals; Roboterhände mit 10 DOF (optional bis 20)",
        "3D-LiDAR, zwei RGB-D-Kameras, Stereo- und Rundum-RGB, GPS/RTK- und UWB-Ortung",
        "NVIDIA-Thor-Rechenmodul plus zwei RK3588-Controller; AGIBOT nennt 700 TOPS",
        "5 kg Traglast je Arm, 320 N·m Spitzenmoment im Knie, bis 1,8 m/s Gehgeschwindigkeit im Alltag",
        "Eigenentwicklung über AimDK; OTA-Updates und drahtloses Handterminal"
      ]
    },
    "specs": [
      [
        "Height",
        "Höhe",
        "174 cm",
        "174 cm"
      ],
      [
        "Dimensions",
        "Abmessungen",
        "174 × 52 × 30 cm (H × W × L)",
        "174 × 52 × 30 cm (Höhe × Breite × Länge)"
      ],
      [
        "Weight",
        "Gewicht",
        "60 kg",
        "60 kg"
      ],
      [
        "Active DOF",
        "Aktive Freiheitsgrade",
        "51 (neck 2, arm 7 × 2, waist 3, leg 6 × 2, hand 10 × 2)",
        "51 (Nacken 2, Arm 7 × 2, Taille 3, Bein 6 × 2, Hand 10 × 2)"
      ],
      [
        "Hands",
        "Hände",
        "Dexterous hand, 10 DOF (optional up to 20 DOF)",
        "Geschickte Hand, 10 DOF (optional bis zu 20 DOF)"
      ],
      [
        "Perception",
        "Sensorik",
        "3D LiDAR, manipulation RGB-D, terrain RGB-D, binocular RGB, surround-view RGB, shoulder touch sensors",
        "3D-LiDAR, RGB-D-Kamera zur Manipulation, RGB-D-Kamera für Gelände, binokulare RGB-Kamera, Rundumsicht-RGB-Kamera, Berührungssensoren an den Schultern"
      ],
      [
        "Positioning",
        "Ortung",
        "GPS, GPS-RTK, UWB",
        "GPS, GPS-RTK, UWB"
      ],
      [
        "Interaction",
        "Interaktion",
        "Front and rear 8-microphone arrays, speaker, curved screen, omnidirectional indicator light",
        "Vorderes und hinteres 8-Mikrofon-Array, Lautsprecher, gebogener Bildschirm, omnidirektionale Anzeigeleuchte"
      ],
      [
        "Walking speed",
        "Gehgeschwindigkeit",
        "Max. daily 1.8 m/s (typical < 1.2 m/s; lab max. 2.5 m/s)",
        "Maximal im täglichen Betrieb 1.8 m/s (typisch < 1.2 m/s; Labormaximum 2.5 m/s)"
      ],
      [
        "Arm payload",
        "Armtraglast",
        "5 kg per arm",
        "5 kg pro Arm"
      ],
      [
        "Peak knee torque",
        "Spitzenmoment Knie",
        "320 N·m",
        "320 N·m"
      ],
      [
        "Battery",
        "Akku",
        "1152 Wh, dual battery",
        "1152 Wh, Doppelakku"
      ],
      [
        "Endurance",
        "Laufzeit",
        "About 8 h (standing/walking 1:1)",
        "Etwa 8 h (Stehen/Gehen 1:1)"
      ],
      [
        "Charging",
        "Laden",
        "Direct, battery swap or autonomous; ≤ 2 h; 110–220 V",
        "Direkt, Akkuwechsel oder autonom; ≤ 2 h; 110–220 V"
      ],
      [
        "Compute",
        "Rechenmodul",
        "NVIDIA Thor + 2 × RK3588",
        "NVIDIA Thor + 2 × RK3588"
      ],
      [
        "Connectivity",
        "Konnektivität",
        "Wi-Fi, 4G/5G, Bluetooth",
        "Wi-Fi, 4G/5G, Bluetooth"
      ],
      [
        "Software",
        "Software",
        "OTA updates, handheld terminal, secondary development (AimDK)",
        "OTA-Updates, Handheld-Terminal, Sekundärentwicklung (AimDK)"
      ]
    ],
    "apps": {
      "en": [
        "Reception & guided tours",
        "Retail & brand experience",
        "Inspection & patrol",
        "Research & development",
        "Data collection"
      ],
      "de": [
        "Empfang & Führungen",
        "Handel & Markenerlebnis",
        "Inspektion & Patrouille",
        "Forschung & Entwicklung",
        "Datenerfassung"
      ]
    },
    "link": "https://store.agibot.com/products/a3u",
    "src": {
      "en": "AGIBOT AimDK A3 Ultra developer guide v3.1, section 1.2 Robot Specifications; AGIBOT store listing (700 TOPS).",
      "de": "AGIBOT AimDK A3 Ultra Entwicklerhandbuch v3.1, Abschnitt 1.2 Robot Specifications; AGIBOT-Store-Eintrag (700 TOPS)."
    },
    "gal": 7
  },
  {
    "id": "a3",
    "cat": "humanoid",
    "name": "AGIBOT A3",
    "badge": {
      "en": "New",
      "de": "Neu"
    },
    "tagline": {
      "en": "Lightweight full-size humanoid built for the stage",
      "de": "Leichter Humanoid in voller Größe für die Bühne"
    },
    "desc": {
      "en": "AGIBOT A3 is the 2026 performance model: 173 cm, only 55 kg, 12 kW of instantaneous power and a 10-hour dual-battery endurance. Fleet control for 100+ units, a customisable appearance and native LinkCraft motion authoring make it the choice for shows, launches and brand events.",
      "de": "AGIBOT A3 ist das Performance-Modell 2026: 173 cm, nur 55 kg, 12 kW Spitzenleistung und 10 Stunden Laufzeit aus dem Doppelakku. Flottensteuerung für 100+ Einheiten, individualisierbares Design und native LinkCraft-Bewegungserstellung machen ihn zur Wahl für Shows, Launches und Markenevents."
    },
    "highlights": {
      "en": [
        "Power-to-weight ratio 0.218 kW/kg (150 A, 12 kW) enables somersaults and aerial walking",
        "10 h endurance from a 1152 Wh dual battery; hot swap in 10 seconds without shutdown",
        "Fleet control for precise coordination of 100+ units; UWB positioning < ±10 cm",
        "Magnesium alloy, titanium alloy and TPU construction at 55 kg",
        "Native LinkCraft compatibility for zero-code motion creation; LinkSoul character design",
        "Dual-module 5G with dual SIM; autonomous case loading for single-operator transport"
      ],
      "de": [
        "Leistungsgewicht 0,218 kW/kg (150 A, 12 kW) für Salti und Aerial Walking",
        "10 h Laufzeit aus 1152-Wh-Doppelakku; Hot-Swap in 10 Sekunden ohne Abschalten",
        "Flottensteuerung für präzise Koordination von 100+ Einheiten; UWB-Ortung < ±10 cm",
        "Magnesium-, Titanlegierung und TPU bei 55 kg",
        "Nativ LinkCraft-kompatibel für Bewegungen ohne Code; Charakterdesign über LinkSoul",
        "Dual-5G mit zwei SIM-Karten; autonomes Verladen im Transportcase durch eine Person"
      ]
    },
    "specs": [
      [
        "Height",
        "Höhe",
        "173 cm",
        "173 cm"
      ],
      [
        "Weight",
        "Gewicht",
        "55 kg",
        "55 kg"
      ],
      [
        "Endurance",
        "Laufzeit",
        "Up to 10 h",
        "Bis zu 10 h"
      ],
      [
        "Battery",
        "Akku",
        "Dual battery packs, 1152 Wh, full-tab cells",
        "Doppelakkupacks, 1152 Wh, Full-Tab-Zellen"
      ],
      [
        "Peak power",
        "Spitzenleistung",
        "12 kW (150 A); 0.218 kW/kg",
        "12 kW (150 A); 0.218 kW/kg"
      ],
      [
        "Positioning",
        "Ortung",
        "UWB, single-unit accuracy < ±10 cm",
        "UWB, Genauigkeit eines einzelnen Geräts < ±10 cm"
      ],
      [
        "Fleet control",
        "Flottensteuerung",
        "100+ units",
        "100+ Geräte"
      ],
      [
        "Network",
        "Netzwerk",
        "Dual-module 5G, dual SIM",
        "5G mit zwei Modulen, Dual-SIM"
      ],
      [
        "Materials",
        "Material",
        "Magnesium alloy, titanium alloy, TPU",
        "Magnesiumlegierung, Titanlegierung, TPU"
      ],
      [
        "Battery swap",
        "Akkuwechsel",
        "Hot swap, about 10 s",
        "Hot-Swap, etwa 10 s"
      ],
      [
        "Motion authoring",
        "Bewegungserstellung",
        "LinkCraft (native); LinkSoul character design",
        "LinkCraft (nativ); LinkSoul-Charakterdesign"
      ]
    ],
    "apps": {
      "en": [
        "Events & stage performance",
        "Retail & brand experience",
        "Reception & guided tours"
      ],
      "de": [
        "Events & Bühnenshows",
        "Handel & Markenerlebnis",
        "Empfang & Führungen"
      ]
    },
    "link": "https://store.agibot.com/products/a3",
    "src": {
      "en": "AGIBOT product brochure, April 2026 (AGIBOT A3 page); AGIBOT store listing.",
      "de": "AGIBOT Produktbroschüre April 2026 (Seite AGIBOT A3); AGIBOT-Store-Eintrag."
    },
    "gal": 5
  },
  {
    "id": "a2-ultra",
    "cat": "humanoid",
    "name": "AGIBOT A2 Ultra",
    "badge": null,
    "tagline": {
      "en": "The full-size humanoid deployed commercially at scale",
      "de": "Der kommerziell in Serie eingesetzte Humanoid in voller Größe"
    },
    "desc": {
      "en": "A2 Ultra is AGIBOT's interactive service humanoid: 169 cm, 40 degrees of freedom, LiDAR and RGB-D perception, a facial screen and voice interaction, built for reception, guidance, showrooms and events. Applicable conformity documentation and integration requirements must be confirmed for the configuration and intended market.",
      "de": "A2 Ultra ist AGIBOTs interaktiver Service-Humanoid: 169 cm, 40 Freiheitsgrade, LiDAR- und RGB-D-Sensorik, Gesichtsdisplay und Sprachinteraktion – gebaut für Empfang, Besucherführung, Showrooms und Events. Die anwendbaren Konformitätsunterlagen und Integrationsanforderungen müssen für die Konfiguration und den Zielmarkt bestätigt werden."
    },
    "highlights": {
      "en": [
        "40 degrees of freedom, 7-DOF arms, walking speed up to 1.2 m/s",
        "About 3 h standing operation with voice interaction; about 1.5 h continuous walking",
        "LiDAR (0.2–70 m), head and pelvis RGB-D, chest RGB and fisheye cameras; positioning ±10 cm",
        "NVIDIA Jetson AGX Orin 64 GB brain board; secondary development via AimDK",
        "Supplier-described arm collision sensing and obstacle detection; application-specific risk assessment and conformity documentation required",
        "AGIBOT associates the A2 Ultra with its 106.286 km walking record; Guinness World Records names the record-setting robot as AgiBot A2"
      ],
      "de": [
        "40 Freiheitsgrade, 7-DOF-Arme, Gehgeschwindigkeit bis 1,2 m/s",
        "Rund 3 h Standbetrieb mit Sprachinteraktion; rund 1,5 h Dauergehen",
        "LiDAR (0,2–70 m), RGB-D an Kopf und Becken, Brust-RGB und Fisheye-Kameras; Ortung ±10 cm",
        "NVIDIA Jetson AGX Orin 64 GB als Brain-Board; Eigenentwicklung über AimDK",
        "Vom Lieferanten beschriebene Arm-Kollisions- und Hinderniserkennung; anwendungsspezifische Risikobeurteilung und Konformitätsunterlagen erforderlich",
        "AGIBOT verbindet den A2 Ultra mit seinem 106,286-km-Gehrekord; Guinness World Records nennt den Rekordroboter AgiBot A2"
      ]
    },
    "specs": [
      [
        "Height",
        "Höhe",
        "169 cm",
        "169 cm"
      ],
      [
        "Dimensions",
        "Abmessungen",
        "169 × 75 × 30 cm (H × W × L)",
        "169 × 75 × 30 cm (Höhe × Breite × Länge)"
      ],
      [
        "Net weight",
        "Nettogewicht",
        "≈ 69 kg",
        "≈ 69 kg"
      ],
      [
        "Degrees of freedom",
        "Freiheitsgrade",
        "40",
        "40"
      ],
      [
        "Walking speed",
        "Gehgeschwindigkeit",
        "Up to 1.2 m/s",
        "Bis zu 1.2 m/s"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "≈ 3 h standing with voice output; ≈ 1.5 h walking",
        "≈ 3 h im Stand mit Sprachausgabe; ≈ 1.5 h beim Gehen"
      ],
      [
        "Battery",
        "Akku",
        "14.4 Ah; charging 2 h at ≤ 500 W",
        "14.4 Ah; Laden 2 h bei ≤ 500 W"
      ],
      [
        "Perception",
        "Sensorik",
        "LiDAR 0.2–40 m @10 % / 0.2–70 m @80 %; head RGB-D (up to 1280×720, 0.3–10 m); pelvis RGB-D; chest RGB and 2 fisheye cameras",
        "LiDAR 0.2–40 m bei 10 % / 0.2–70 m bei 80 %; RGB-D-Kamera am Kopf (bis zu 1280×720, 0.3–10 m); RGB-D-Kamera am Becken; RGB-Kamera am Brustkorb und 2 Fischaugenkameras"
      ],
      [
        "Positioning accuracy",
        "Ortungsgenauigkeit",
        "±10 cm, ±10°",
        "±10 cm, ±10°"
      ],
      [
        "Interaction",
        "Interaktion",
        "4.3-inch facial screen 800×480, dual 5 W speakers, multi-colour ambient light",
        "4.3-Zoll-Gesichtsbildschirm 800×480, zwei 5-W-Lautsprecher, mehrfarbiges Umgebungslicht"
      ],
      [
        "Hand capability",
        "Handfähigkeit",
        "Grasp < 3 kg palm down; hook grip < 8 kg palm up; arm load with hand 2 kg",
        "Greifen < 3 kg mit der Handfläche nach unten; Hakengriff < 8 kg mit der Handfläche nach oben; Armlast mit Hand 2 kg"
      ],
      [
        "Safety",
        "Sicherheit",
        "Arm collision sensing; obstacle detection up to 5 m; minimum obstacle height 30 cm",
        "Arm-Kollisionserkennung; Hinderniserkennung bis zu 5 m; minimale Hindernishöhe 30 cm"
      ],
      [
        "Operating conditions",
        "Betriebsbedingungen",
        "0–40 °C, 10–90 % RH; joint modules IP5X; max. obstacle 20 mm",
        "0–40 °C, 10–90 % RH; Gelenkmodule IP5X; maximales Hindernis 20 mm"
      ],
      [
        "Compute",
        "Rechenmodul",
        "NVIDIA Jetson AGX Orin 64 GB",
        "NVIDIA Jetson AGX Orin 64 GB"
      ],
      [
        "Connectivity",
        "Konnektivität",
        "Wi-Fi, cellular",
        "Wi-Fi, Mobilfunk"
      ],
      [
        "Certifications",
        "Zertifizierungen",
        "Applicable documentation to be confirmed for configuration and market",
        "Anwendbare Unterlagen werden für Konfiguration und Markt bestätigt"
      ]
    ],
    "apps": {
      "en": [
        "Reception & guided tours",
        "Retail & brand experience",
        "Events & stage performance",
        "Research & development"
      ],
      "de": [
        "Empfang & Führungen",
        "Handel & Markenerlebnis",
        "Events & Bühnenshows",
        "Forschung & Entwicklung"
      ]
    },
    "link": "https://www.agibot.com/products/A2_Ultra",
    "src": {
      "en": "AGIBOT AimDK A2 developer guide v2.1, section 1.2 Robot Specifications; AGIBOT A2 Ultra product page; certifications and record wording from AGIBOT's store and tekpoint.com/en/robotics.",
      "de": "AGIBOT AimDK A2 Entwicklerhandbuch v2.1, Abschnitt 1.2 Robot Specifications; AGIBOT A2 Ultra Produktseite; Zertifizierungen und Rekordformulierung aus dem AGIBOT-Store und tekpoint.com/en/robotics."
    },
    "gal": 8
  },
  {
    "id": "a2-lite",
    "cat": "humanoid",
    "name": "AGIBOT A2 Lite",
    "badge": null,
    "tagline": {
      "en": "Cost-effective full-size humanoid for performance",
      "de": "Kosteneffizienter Humanoid in voller Größe für Performances"
    },
    "desc": {
      "en": "A2 Lite is the full-size, cost-effective humanoid for the entertainment and commercial performance sector. Multi-robot fleet control and unrestricted choreography make it the entry point for synchronised shows, product launches and brand activations.",
      "de": "A2 Lite ist der kosteneffiziente Humanoid in voller Größe für Entertainment und kommerzielle Performances. Flottensteuerung für mehrere Roboter und freie Choreografie machen ihn zum Einstieg für synchrone Shows, Produktlaunches und Markenaktivierungen."
    },
    "highlights": {
      "en": [
        "Full-size humanoid at a performance-oriented price point",
        "Multi-robot fleet control for synchronised formations",
        "Unrestricted choreography for dance, formations and custom routines",
        "Detailed technical data and configurations on request from the Tekpoint Robotics team"
      ],
      "de": [
        "Humanoid in voller Größe zu einem performance-orientierten Preis",
        "Flottensteuerung für synchrone Formationen",
        "Freie Choreografie für Tanz, Formationen und eigene Routinen",
        "Detaillierte technische Daten und Konfigurationen auf Anfrage beim Tekpoint-Robotics-Team"
      ]
    },
    "specs": [
      [
        "Class",
        "Klasse",
        "Full-size humanoid",
        "Humanoider Roboter in voller Größe"
      ],
      [
        "Positioning",
        "Positionierung",
        "Entertainment and commercial performance",
        "Unterhaltung und kommerzielle Darbietungen"
      ],
      [
        "Fleet control",
        "Flottensteuerung",
        "Multi-robot fleet control",
        "Flottensteuerung für mehrere Roboter"
      ],
      [
        "Choreography",
        "Choreografie",
        "Unrestricted choreography",
        "Uneingeschränkte Choreografie"
      ],
      [
        "Technical data sheet",
        "Technisches Datenblatt",
        "On request",
        "Auf Anfrage"
      ]
    ],
    "apps": {
      "en": [
        "Events & stage performance",
        "Retail & brand experience"
      ],
      "de": [
        "Events & Bühnenshows",
        "Handel & Markenerlebnis"
      ]
    },
    "link": "https://store.agibot.com/products/a2-lite",
    "src": {
      "en": "AGIBOT store listing (store.agibot.com/products/a2-lite). AGIBOT publishes no detailed data sheet for the A2 Lite; figures are supplied per project.",
      "de": "AGIBOT-Store-Eintrag (store.agibot.com/products/a2-lite). AGIBOT veröffentlicht kein detailliertes Datenblatt zum A2 Lite; Angaben erfolgen projektbezogen."
    },
    "gal": 4
  },
  {
    "id": "x2-ultra",
    "cat": "humanoid",
    "name": "AGIBOT X2 Ultra",
    "badge": null,
    "tagline": {
      "en": "Agile 1.31 m humanoid for guided tours, retail and research",
      "de": "Agiler 1,31-m-Humanoid für Führungen, Handel und Forschung"
    },
    "desc": {
      "en": "X2 Ultra combines motion, interaction and task intelligence in a 1.31 m, 39 kg body: 30 actuated degrees of freedom, LiDAR and RGB-D perception, an interactive screen and voice, plus an NVIDIA Orin NX for autonomous navigation and secondary development. It is the robot Tekpoint operated at IFA Berlin 2026.",
      "de": "X2 Ultra vereint Bewegung, Interaktion und Aufgabenintelligenz in einem 1,31 m großen, 39 kg leichten Körper: 30 aktive Freiheitsgrade, LiDAR- und RGB-D-Sensorik, interaktives Display und Sprache sowie ein NVIDIA Orin NX für autonome Navigation und Eigenentwicklung. Der Roboter, den Tekpoint auf der IFA Berlin 2026 im Einsatz hatte."
    },
    "highlights": {
      "en": [
        "30 actuated DOF, 7 per arm, 3 waist, 6 per leg; peak joint torque 120 N·m",
        "Interactive RGB, front stereo RGB, rear RGB, RGB-D camera and 3D LiDAR; head touch sensor",
        "Mapping, navigation and obstacle avoidance; proactive greeting, knowledge-base Q&A, 30+ facial expressions",
        "Orin NX 16 GB (157 TOPS) for secondary development plus RK3588 motion controllers",
        "Manufacturer-stated runtime about 2 h walking at 0.5 m/s; battery capacity and charging options confirmed per configuration",
        "Compatible with LinkCraft (motion) and LinkSoul (persona, wake word, voice); optional hands, grippers and VR teleoperation"
      ],
      "de": [
        "30 aktive Freiheitsgrade, 7 je Arm, 3 Hüfte, 6 je Bein; Spitzenmoment 120 N·m",
        "Interaktive RGB-, Stereo-RGB-, Rück-RGB-, RGB-D-Kamera und 3D-LiDAR; Berührungssensor am Kopf",
        "Kartierung, Navigation und Hindernisvermeidung; proaktive Begrüßung, Wissensdatenbank-Q&A, 30+ Gesichtsausdrücke",
        "Orin NX 16 GB (157 TOPS) für Eigenentwicklung plus RK3588-Bewegungscontroller",
        "Herstellerangabe: etwa 2 h Gehen bei 0,5 m/s; Akkukapazität und Ladeoptionen werden je Konfiguration bestätigt",
        "Kompatibel mit LinkCraft (Bewegung) und LinkSoul (Persona, Wake-Word, Stimme); optionale Hände, Greifer und VR-Teleoperation"
      ]
    },
    "specs": [
      [
        "Height",
        "Höhe",
        "About 1.31 m",
        "Etwa 1.31 m"
      ],
      [
        "Dimensions",
        "Abmessungen",
        "1310 × 460 × 210 mm (H × W × L)",
        "1310 × 460 × 210 mm (Höhe × Breite × Länge)"
      ],
      [
        "Weight",
        "Gewicht",
        "About 39 kg",
        "Etwa 39 kg"
      ],
      [
        "Actuated DOF",
        "Aktive Freiheitsgrade",
        "30 (neck 1, arm 7 × 2, waist 3, leg 6 × 2)",
        "30 (Nacken 1, Arm 7 × 2, Taille 3, Bein 6 × 2)"
      ],
      [
        "Arm span",
        "Armspannweite",
        "558 mm (without end effector)",
        "558 mm (ohne Endeffektor)"
      ],
      [
        "Speed",
        "Geschwindigkeit",
        "Max. 1.8 m/s; daily use ≤ 0.8 m/s",
        "Max. 1.8 m/s; im täglichen Betrieb ≤ 0.8 m/s"
      ],
      [
        "Payload",
        "Traglast",
        "Max. 3 kg in specific posture; ≤ 1 kg across the full workspace (without end effector)",
        "Max. 3 kg in einer bestimmten Körperhaltung; ≤ 1 kg im gesamten Arbeitsbereich (ohne Endeffektor)"
      ],
      [
        "Peak joint torque",
        "Spitzenmoment",
        "120 N·m",
        "120 N·m"
      ],
      [
        "Perception",
        "Sensorik",
        "Interactive RGB, front stereo RGB, rear RGB, RGB-D camera, 3D LiDAR, head touch sensor",
        "Interaktive RGB-Kamera, vordere Stereo-RGB-Kamera, hintere RGB-Kamera, RGB-D-Kamera, 3D-LiDAR, Berührungssensor am Kopf"
      ],
      [
        "Interaction",
        "Interaktion",
        "Microphone array, mini wireless microphone, speakers, interactive screen, lighting effects",
        "Mikrofon-Array, drahtloses Mini-Mikrofon, Lautsprecher, interaktiver Bildschirm, Lichteffekte"
      ],
      [
        "Battery",
        "Akku",
        "Configuration-specific value to be confirmed with quotation",
        "Konfigurationsabhängiger Wert wird mit dem Angebot bestätigt"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "About 2 h continuous walking at 0.5 m/s",
        "Etwa 2 h kontinuierliches Gehen bei 0.5 m/s"
      ],
      [
        "Charging",
        "Laden",
        "Direct, battery swap, optional autonomous; ≤ 1.5 h; 100–220 V",
        "Direkt, Akkuwechsel, optional autonom; ≤ 1.5 h; 100–220 V"
      ],
      [
        "Compute",
        "Rechenmodul",
        "RK3588s + RK3588 base boards; Orin NX 16 GB, 157 TOPS development board",
        "RK3588s + RK3588-Basisplatinen; Orin NX 16 GB, 157 TOPS-Entwicklungsplatine"
      ],
      [
        "Interfaces",
        "Schnittstellen",
        "2 × USB-A, 2 × USB-C, 2 × RJ45, 12 V/3 A and 48 V/5 A power",
        "2 × USB-A, 2 × USB-C, 2 × RJ45, 12 V/3 A und 48 V/5 A Stromversorgung"
      ],
      [
        "Connectivity",
        "Konnektivität",
        "Wi-Fi, Bluetooth, 4G/5G module",
        "Wi-Fi, Bluetooth, 4G/5G-Modul"
      ],
      [
        "Operating temperature",
        "Betriebstemperatur",
        "−10 °C to 40 °C",
        "−10 °C bis 40 °C"
      ],
      [
        "Software",
        "Software",
        "OTA updates, handheld controller, mobile app, LinkCraft, secondary development",
        "OTA-Updates, Handheld-Steuergerät, mobile App, LinkCraft, Sekundärentwicklung"
      ]
    ],
    "apps": {
      "en": [
        "Reception & guided tours",
        "Retail & brand experience",
        "Research & development",
        "Data collection"
      ],
      "de": [
        "Empfang & Führungen",
        "Handel & Markenerlebnis",
        "Forschung & Entwicklung",
        "Datenerfassung"
      ]
    },
    "link": "https://www.agibot.com/products/X2",
    "src": {
      "en": "AGIBOT AimDK X2 documentation v1.0.0, section 1.2 Robot Specifications (the technical manual; AGIBOT's brochure rounds some figures to 2 m/s and 500 Wh).",
      "de": "AGIBOT AimDK X2 Dokumentation v1.0.0, Abschnitt 1.2 Robot Specifications (technisches Handbuch; die AGIBOT-Broschüre rundet auf 2 m/s und 500 Wh)."
    },
    "gal": 8
  },
  {
    "id": "x2",
    "cat": "humanoid",
    "name": "AGIBOT X2",
    "badge": null,
    "tagline": {
      "en": "Half-size humanoid for entertainment and commercial performance",
      "de": "Halbgroßer Humanoid für Entertainment und kommerzielle Performances"
    },
    "desc": {
      "en": "X2 is the performance edition of the X2 platform: 131 cm, 35 kg, 25 degrees of freedom, a rich library of preset motions and multimodal, proactive interaction in a flexible-shell body for project-specific interaction applications.",
      "de": "X2 ist die Performance-Ausführung der X2-Plattform: 131 cm, 35 kg, 25 Freiheitsgrade, eine umfangreiche Bibliothek voreingestellter Bewegungen und multimodale, proaktive Interaktion in einem Körper mit flexibler Hülle für projektbezogene Interaktionsanwendungen."
    },
    "highlights": {
      "en": [
        "Full-body motion transitions with a rich set of preset motion skills",
        "Facial, gesture and body-movement recognition for proactive greeting and handshakes",
        "Over 30 facial expression animations; head-touch voice feedback",
        "Multilingual interaction, motion commands and singing",
        "LinkSoul persona, wake word and voice customisation",
        "Flexible material shell, compact and lightweight structure"
      ],
      "de": [
        "Ganzkörper-Bewegungsübergänge mit umfangreichen voreingestellten Bewegungsskills",
        "Gesichts-, Gesten- und Körperbewegungserkennung für proaktive Begrüßung und Händeschütteln",
        "Über 30 Gesichtsausdruck-Animationen; Sprachfeedback bei Kopfberührung",
        "Mehrsprachige Interaktion, Bewegungsbefehle und Gesang",
        "LinkSoul-Persona, Wake-Word und Stimme anpassbar",
        "Flexible Materialhülle, kompakte und leichte Struktur"
      ]
    },
    "specs": [
      [
        "Height",
        "Höhe",
        "131 cm",
        "131 cm"
      ],
      [
        "Weight",
        "Gewicht",
        "35 kg",
        "35 kg"
      ],
      [
        "Total DOF",
        "Freiheitsgrade gesamt",
        "25",
        "25"
      ],
      [
        "DOF per arm",
        "Freiheitsgrade je Arm",
        "5",
        "5"
      ],
      [
        "Perception",
        "Sensorik",
        "Interactive RGB camera",
        "Interaktive RGB-Kamera"
      ],
      [
        "Max. end-effector payload",
        "Max. Traglast",
        "Up to 3 kg in specific postures; configuration confirmation required",
        "Bis zu 3 kg in bestimmten Körperhaltungen; Konfigurationsbestätigung erforderlich"
      ],
      [
        "Max. walking speed",
        "Max. Gehgeschwindigkeit",
        "Up to 2 m/s laboratory maximum; up to 1.8 m/s otherwise, subject to variant",
        "Bis zu 2 m/s unter Laborbedingungen; sonst bis zu 1,8 m/s, abhängig von der Variante"
      ],
      [
        "Battery",
        "Akku",
        "500 Wh",
        "500 Wh"
      ],
      [
        "Endurance",
        "Laufzeit",
        "2 h",
        "2 h"
      ],
      [
        "Compute",
        "Rechenmodul",
        "RK3588 (motion control) + RK3588S (interaction)",
        "RK3588 (Bewegungssteuerung) + RK3588S (Interaktion)"
      ],
      [
        "Proactive interaction",
        "Proaktive Interaktion",
        "Supported",
        "Unterstützt"
      ]
    ],
    "apps": {
      "en": [
        "Events & stage performance",
        "Retail & brand experience"
      ],
      "de": [
        "Events & Bühnenshows",
        "Handel & Markenerlebnis"
      ]
    },
    "link": "https://store.agibot.com/products/x2",
    "src": {
      "en": "AGIBOT product brochure, April 2026 (AGIBOT X2 page); AGIBOT store listing.",
      "de": "AGIBOT Produktbroschüre April 2026 (Seite AGIBOT X2); AGIBOT-Store-Eintrag."
    },
    "gal": 6
  },
  {
    "id": "g2",
    "cat": "industrial",
    "name": "AGIBOT G2",
    "badge": null,
    "tagline": {
      "en": "Industrial-grade wheeled humanoid for precision operation",
      "de": "Industrietauglicher Rad-Humanoid für Präzisionsarbeit"
    },
    "desc": {
      "en": "G2 pairs a humanoid upper body – two 7-DOF force-controlled arms with joint torque sensors, a 5-DOF folding torso and a 3-DOF head – with an omnidirectional four-wheel-steering chassis. Sub-millimetre repeatability, 360° perception, hot-swappable dual batteries and an optional charging dock make it suitable for assembly, material handling and front-desk interaction. The first G2 units are already in Tekpoint's own warehouse.",
      "de": "G2 kombiniert einen humanoiden Oberkörper – zwei kraftgeregelte 7-DOF-Arme mit Gelenkmomentsensoren, einen 5-DOF-Klapptorso und einen 3-DOF-Kopf – mit einem omnidirektionalen Fahrwerk mit vier Lenkrädern. Wiederholgenauigkeit im Submillimeterbereich, 360°-Wahrnehmung, hot-swap-fähige Doppelakkus und eine optionale Ladestation eignen ihn für Montage, Materialhandling und Empfang. Die ersten G2 stehen bereits in Tekpoints eigenem Lager."
    },
    "highlights": {
      "en": [
        "Two 7-DOF force-controlled arms: 5 kg rated payload each, ±0.1 mm repeatability, torque sensor in every joint",
        "5-DOF folding lift torso reproduces human waist and leg motion; 0–2.3 m vertical workspace",
        "Four-wheel steering with pivot turn and crab-walking; 1.5 m/s; navigation to ±3 cm",
        "360° perception: head binocular camera, 3 fisheye cameras, head and wrist RGB-D, 2 chassis LiDAR, 8 ultrasonic sensors",
        "Dual hot-swappable batteries, 1652 Wh, about 4 h; optional autonomous return-to-dock for 24/7 shifts",
        "Compute options up to 2070 TFLOPS (FP4); IP42 whole-machine protection; physical e-stop"
      ],
      "de": [
        "Zwei kraftgeregelte 7-DOF-Arme: je 5 kg Nennlast, ±0,1 mm Wiederholgenauigkeit, Momentsensor in jedem Gelenk",
        "5-DOF-Klapp-Hubtorso bildet menschliche Hüft- und Beinbewegung nach; 0–2,3 m vertikaler Arbeitsraum",
        "Vierradlenkung mit Punktdrehung und Krabbengang; 1,5 m/s; Navigation auf ±3 cm",
        "360°-Wahrnehmung: Stereokamera am Kopf, 3 Fisheye-Kameras, RGB-D an Kopf und Handgelenken, 2 Fahrwerks-LiDAR, 8 Ultraschallsensoren",
        "Zwei hot-swap-fähige Akkus, 1652 Wh, rund 4 h; optional autonome Rückkehr zur Ladestation für 24/7-Schichten",
        "Rechenleistung bis 2070 TFLOPS (FP4); Schutzart IP42; physischer Not-Halt"
      ]
    },
    "specs": [
      [
        "Dimensions",
        "Abmessungen",
        "1225–1795 mm (H) × 640 mm (W) × 760 mm (L)",
        "1225–1795 mm (H) × 640 mm (B) × 760 mm (L)"
      ],
      [
        "Weight",
        "Gewicht",
        "185 kg",
        "185 kg"
      ],
      [
        "Degrees of freedom",
        "Freiheitsgrade",
        "25 (excluding end effectors): head 3, arm 7 × 2, torso 5, chassis",
        "25 (ohne Endeffektoren): Kopf 3, Arm 7 × 2, Rumpf 5, Fahrgestell"
      ],
      [
        "Arm payload",
        "Armtraglast",
        "5 kg rated per arm; 10 kg dual-arm rated; 15 kg dual-arm peak",
        "5 kg Nennlast pro Arm; 10 kg Nennlast mit beiden Armen; 15 kg Spitzenlast mit beiden Armen"
      ],
      [
        "Arm precision",
        "Armpräzision",
        "Repeatability ±0.1 mm; absolute ±1 mm; force-control resolution ≤ 0.02 N·m",
        "Wiederholgenauigkeit ±0.1 mm; absolut ±1 mm; Kraftsteuerungsauflösung ≤ 0.02 N·m"
      ],
      [
        "Reach",
        "Reichweite",
        "Arm length 696 mm; dual-arm reach 2.3 m; vertical workspace 0–2.3 m (with O10 hand)",
        "Armlänge 696 mm; Reichweite mit beiden Armen 2.3 m; vertikaler Arbeitsbereich 0–2.3 m (mit O10-Hand)"
      ],
      [
        "Chassis",
        "Fahrwerk",
        "4 steering wheels; 1.5 m/s; pivot turn and crab steering; obstacle 1.5 cm; slope ≤ 5°; min. passage 850 mm",
        "4 Lenkräder; 1.5 m/s; Drehung auf der Stelle und Crab-Steering; Hindernis 1.5 cm; Steigung ≤ 5°; minimale Durchfahrtsbreite 850 mm"
      ],
      [
        "Navigation accuracy",
        "Navigationsgenauigkeit",
        "±5 cm / ±3° standard; ±3 cm / ±2° high-precision",
        "±5 cm / ±3° Standard; ±3 cm / ±2° hohe Präzision"
      ],
      [
        "Perception",
        "Sensorik",
        "Head binocular camera 1920×1536 @60 fps; 3 fisheye 215°×170°; head RGB-D 1280×800; 2 wrist RGB-D; 2 chassis LiDAR 360°; 8 ultrasonic",
        "Binokulare Kopfkamera 1920×1536 @60 fps; 3 Fischaugenkameras 215°×170°; RGB-D-Kopfkamera 1280×800; 2 RGB-D-Handgelenkkameras; 2 Fahrgestell-LiDARs 360°; 8 Ultraschallsensoren"
      ],
      [
        "Interaction",
        "Interaktion",
        "6.3-inch 500-nit facial screen, 4-microphone array, 8 W speaker, light indicator",
        "6.3-Zoll-Gesichtsbildschirm mit 500 nit, 4-Mikrofon-Array, 8-W-Lautsprecher, Leuchtanzeige"
      ],
      [
        "Compute",
        "Rechenmodul",
        "Standard: 500 TOPS INT8, 24-core, 64 GB, 2 TB NVMe · High: NVIDIA Jetson T5000, 2070 TFLOPS FP4, 128 GB",
        "Standard: 500 TOPS INT8, 24 Kerne, 64 GB, 2 TB NVMe · Hochleistung: NVIDIA Jetson T5000, 2070 TFLOPS FP4, 128 GB"
      ],
      [
        "Battery",
        "Akku",
        "2 hot-swappable batteries, 1652 Wh (34 Ah), 48 V; about 400 W rated",
        "2 Hot-Swap-Akkus, 1652 Wh (34 Ah), 48 V; etwa 400 W Nennleistung"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "About 4 h",
        "Etwa 4 h"
      ],
      [
        "Charging",
        "Laden",
        "Direct, battery swap, autonomous dock (optional); ≤ 2 h; 100–240 V",
        "Direkt, Akkuwechsel, autonome Dockingstation (optional); ≤ 2 h; 100–240 V"
      ],
      [
        "Connectivity",
        "Konnektivität",
        "Wi-Fi, Bluetooth, 4G/5G (optional), NFC; 1 GbE Internet, 1 GbE + 10 GbE LAN, USB-A/USB-C",
        "Wi-Fi, Bluetooth, 4G/5G (optional), NFC; 1 GbE Internet, 1 GbE + 10 GbE LAN, USB-A/USB-C"
      ],
      [
        "Protection",
        "Schutzart",
        "IP42 whole machine; operating 0–45 °C, ≤ 90 % RH",
        "Gesamtes Gerät IP42; Betrieb 0–45 °C, ≤ 90 % RH"
      ],
      [
        "Safety",
        "Sicherheit",
        "Physical emergency stop; active and passive collision safety",
        "Physischer Not-Aus; aktive und passive Kollisionssicherheit"
      ],
      [
        "Wireless terminal",
        "Drahtloses Terminal",
        "11.5-inch, 2000×1200",
        "11.5-Zoll, 2000×1200"
      ]
    ],
    "apps": {
      "en": [
        "Manufacturing & logistics",
        "Reception & guided tours",
        "Research & development",
        "Data collection"
      ],
      "de": [
        "Fertigung & Logistik",
        "Empfang & Führungen",
        "Forschung & Entwicklung",
        "Datenerfassung"
      ]
    },
    "link": "https://www.agibot.com/products/G2",
    "src": {
      "en": "AGIBOT G2 User Manual (EN, August 2026), specification table; AGIBOT G2 SPECS sheet (IP42, charging, communication).",
      "de": "AGIBOT G2 Benutzerhandbuch (EN, August 2026), Spezifikationstabelle; AGIBOT G2 SPECS Datenblatt (IP42, Laden, Kommunikation)."
    },
    "gal": 8
  },
  {
    "id": "d1-maxpro",
    "cat": "quadruped",
    "name": "AGIBOT D1 MaxPro",
    "badge": null,
    "tagline": {
      "en": "Heavy-payload quadruped for inspection and emergency response",
      "de": "Schwerlast-Vierbeiner für Inspektion und Einsatzkräfte"
    },
    "desc": {
      "en": "D1 MaxPro carries 50 kg over stairs and rough ground with IP67 protection and a −20 °C to 55 °C operating range. A 96-line LiDAR, front and rear cameras and a 720 W expansion power budget make it the platform for plant inspection, security patrol and rescue support.",
      "de": "D1 MaxPro trägt 50 kg über Treppen und unwegsames Gelände, geschützt nach IP67 und einsetzbar von −20 °C bis 55 °C. 96-Linien-LiDAR, Front- und Heckkamera sowie 720 W Erweiterungsleistung machen ihn zur Plattform für Anlageninspektion, Sicherheitspatrouille und Rettungsunterstützung."
    },
    "highlights": {
      "en": [
        "50 kg effective payload; 30 cm continuous stair climbing; 45° maximum slope",
        "IP67, −20 °C to 55 °C; aluminium alloy with high-strength engineering plastic",
        "Manufacturer reference: 5.5 h unloaded / at least 2 h fully loaded; quick-swap battery and optional autonomous dock, subject to configuration",
        "96-line LiDAR (360° × 90°, 120 m, 1.5 cm) plus 2 MP wide-angle cameras front and rear",
        "Expansion: 3 × Gigabit Ethernet, 2 × USB 3.0, serial; 12/24/48 V up to 720 W; SDK; optional 4G",
        "Maximum joint torque 180 N·m; continuous walking 1.5 m/s, top speed 3 m/s"
      ],
      "de": [
        "50 kg Nutzlast; 30 cm Treppenstufen im Dauerbetrieb; 45° maximale Steigung",
        "IP67, −20 °C bis 55 °C; Aluminiumlegierung mit hochfestem Technikkunststoff",
        "Herstellerreferenz: 5,5 h ohne Last / mindestens 2 h bei voller Last; Schnellwechselakku und optionale autonome Ladestation, je Konfiguration",
        "96-Linien-LiDAR (360° × 90°, 120 m, 1,5 cm) plus 2-MP-Weitwinkelkameras vorn und hinten",
        "Erweiterung: 3 × Gigabit-Ethernet, 2 × USB 3.0, seriell; 12/24/48 V bis 720 W; SDK; optional 4G",
        "Maximales Gelenkmoment 180 N·m; Dauergehen 1,5 m/s, Höchstgeschwindigkeit 3 m/s"
      ]
    },
    "specs": [
      [
        "Standing dimensions",
        "Abmessungen stehend",
        "1230 × 530 × 730 mm (L × W × H)",
        "1230 × 530 × 730 mm (Länge × Breite × Höhe)"
      ],
      [
        "Weight (with battery)",
        "Gewicht (mit Akku)",
        "68 kg",
        "68 kg"
      ],
      [
        "Effective payload",
        "Nutzlast",
        "50 kg",
        "50 kg"
      ],
      [
        "Battery",
        "Akku",
        "Configuration-specific value to be confirmed with quotation",
        "Konfigurationsabhängiger Wert wird mit dem Angebot bestätigt"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "Manufacturer reference: 5.5 h unloaded; ≥ 2 h fully loaded; actual conditions apply",
        "Herstellerreferenz: 5,5 h ohne Last; ≥ 2 h bei voller Last; abhängig von den Einsatzbedingungen"
      ],
      [
        "Range",
        "Reichweite",
        "13.5 km at full load",
        "13.5 km bei Volllast"
      ],
      [
        "Speed",
        "Geschwindigkeit",
        "1.5 m/s continuous; 3 m/s maximum",
        "1.5 m/s kontinuierlich; maximal 3 m/s"
      ],
      [
        "Stair climbing",
        "Treppensteigen",
        "30 cm continuous",
        "30 cm kontinuierlich"
      ],
      [
        "Max. climbing angle",
        "Max. Steigung",
        "45°",
        "45°"
      ],
      [
        "Max. joint torque",
        "Max. Gelenkmoment",
        "180 N·m",
        "180 N·m"
      ],
      [
        "LiDAR",
        "LiDAR",
        "96-line, 360° × 90°, 120 m range, 1.5 cm accuracy",
        "96 Zeilen, 360° × 90°, Reichweite 120 m, Genauigkeit 1.5 cm"
      ],
      [
        "Cameras",
        "Kameras",
        "2 MP industrial wide-angle front and rear; DFOV 150°",
        "2-MP-Industrie-Weitwinkelkameras vorn und hinten; DFOV 150°"
      ],
      [
        "Protection",
        "Schutzart",
        "IP67",
        "IP67"
      ],
      [
        "Operating temperature",
        "Betriebstemperatur",
        "−20 °C to 55 °C",
        "−20 °C bis 55 °C"
      ],
      [
        "Expansion",
        "Erweiterung",
        "3 × GbE, 2 × USB 3.0, Fast Ethernet, serial; 12/24/48 V up to 720 W; SDK; 4G optional",
        "3 × GbE, 2 × USB 3.0, Fast Ethernet, seriell; 12/24/48 V bis zu 720 W; SDK; 4G optional"
      ],
      [
        "Accessories",
        "Zubehör",
        "Screen remote control standard; autonomous charging dock optional",
        "Bildschirm-Fernsteuerung standardmäßig; autonome Ladestation optional"
      ]
    ],
    "apps": {
      "en": [
        "Inspection & security patrol",
        "Manufacturing & logistics",
        "Research & development"
      ],
      "de": [
        "Inspektion & Sicherheitspatrouille",
        "Fertigung & Logistik",
        "Forschung & Entwicklung"
      ]
    },
    "link": "https://www.agibot.com/products/D1_MaxPro",
    "src": {
      "en": "AGIBOT D1 MaxPro Quadruped Robot – Technical Specification Sheet (2026).",
      "de": "AGIBOT D1 MaxPro Quadruped Robot – Technical Specification Sheet (2026)."
    },
    "gal": 7
  },
  {
    "id": "d1-max",
    "cat": "quadruped",
    "name": "AGIBOT D1 Max",
    "badge": null,
    "tagline": {
      "en": "Wheel-leg quadruped for inspection and patrol",
      "de": "Rad-Bein-Vierbeiner für Inspektion und Patrouillen"
    },
    "desc": {
      "en": "D1 Max combines wheel and leg mobility for inspection and patrol applications. The manufacturer lists a rated payload of 25 kg. LiDAR, cameras and RTK positioning support navigation; operating performance and configuration are confirmed for each project.",
      "de": "D1 Max kombiniert Rad- und Beinbewegung für Inspektions- und Patrouillenanwendungen. Der Hersteller nennt eine Nenntraglast von 25 kg. LiDAR, Kameras und RTK-Ortung unterstützen die Navigation; Betriebsleistung und Konfiguration werden für jedes Projekt bestätigt."
    },
    "highlights": {
      "en": [
        "Wheel and leg mobility; maximum speed to be confirmed for the quoted configuration",
        "Manufacturer-stated rated payload: 25 kg",
        "Manufacturer reference range: at least 29 km unloaded / 18 km fully loaded; battery runtime confirmed for the application",
        "22 cm stairs, 45° slope, 80 cm jump and obstacle crossing",
        "2 × 192-line LiDAR (360° × 90°, 120 m), 2 × 8 MP FPV cameras, GNSS RTK, ultrasonic sensors",
        "IP67, −20 °C to 55 °C; 480 W expansion power; SDK"
      ],
      "de": [
        "Rad- und Beinbewegung; Höchstgeschwindigkeit wird für die angebotene Konfiguration bestätigt",
        "Nenntraglast laut Hersteller: 25 kg",
        "Reichweite laut Hersteller: mindestens 29 km ohne Last / 18 km bei voller Last; Akkulaufzeit wird für die Anwendung bestätigt",
        "22 cm Stufen, 45° Steigung, 80 cm Sprung- und Hindernishöhe",
        "2 × 192-Linien-LiDAR (360° × 90°, 120 m), 2 × 8-MP-FPV-Kameras, GNSS-RTK, Ultraschall",
        "IP67, −20 °C bis 55 °C; 480 W Erweiterungsleistung; SDK"
      ]
    },
    "specs": [
      [
        "Standing dimensions",
        "Abmessungen stehend",
        "920 × 480 × 570 mm (L × W × H)",
        "920 × 480 × 570 mm (Länge × Breite × Höhe)"
      ],
      [
        "Weight (with battery)",
        "Gewicht (mit Akku)",
        "40 kg",
        "40 kg"
      ],
      [
        "Effective payload",
        "Nutzlast",
        "25 kg rated payload (manufacturer reference)",
        "25 kg Nenntraglast (Herstellerreferenz)"
      ],
      [
        "Battery",
        "Akku",
        "10 Ah, 54 V; charging < 2 h",
        "10 Ah, 54 V; Laden < 2 h"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "Configuration-specific value to be confirmed with quotation",
        "Konfigurationsabhängiger Wert wird mit dem Angebot bestätigt"
      ],
      [
        "Range",
        "Reichweite",
        "29 km no-load; 18 km full-load",
        "29 km ohne Last; 18 km bei Volllast"
      ],
      [
        "Max. speed",
        "Max. Geschwindigkeit",
        "Configuration-specific value to be confirmed with quotation",
        "Konfigurationsabhängiger Wert wird mit dem Angebot bestätigt"
      ],
      [
        "Stair climbing",
        "Treppensteigen",
        "22 cm continuous",
        "22 cm kontinuierlich"
      ],
      [
        "Max. climbing angle",
        "Max. Steigung",
        "45°",
        "45°"
      ],
      [
        "Jump / obstacle",
        "Sprung / Hindernis",
        "80 cm",
        "80 cm"
      ],
      [
        "Max. joint torque",
        "Max. Gelenkmoment",
        "150 N·m",
        "150 N·m"
      ],
      [
        "LiDAR",
        "LiDAR",
        "2 × 192-line, 360° × 90°, 120 m",
        "2 × 192 Zeilen, 360° × 90°, 120 m"
      ],
      [
        "Cameras",
        "Kameras",
        "2 × 8 MP FPV, DFOV 122°; 4 fill lights",
        "2 × 8-MP-FPV-Kameras, DFOV 122°; 4 Zusatzleuchten"
      ],
      [
        "Positioning",
        "Ortung",
        "GNSS RTK; ultrasonic sensors up to 5 m",
        "GNSS RTK; Ultraschallsensoren bis zu 5 m"
      ],
      [
        "Protection",
        "Schutzart",
        "IP67; −20 °C to 55 °C",
        "IP67; −20 °C bis 55 °C"
      ],
      [
        "Expansion",
        "Erweiterung",
        "2 × GbE, 2 × USB 3.0, RS-232, RS-485, 2 × SBUS, PPS; 5/12/24/48 V up to 480 W; SDK",
        "2 × GbE, 2 × USB 3.0, RS-232, RS-485, 2 × SBUS, PPS; 5/12/24/48 V bis zu 480 W; SDK"
      ]
    ],
    "apps": {
      "en": [
        "Inspection & security patrol",
        "Research & development",
        "Manufacturing & logistics"
      ],
      "de": [
        "Inspektion & Sicherheitspatrouille",
        "Forschung & Entwicklung",
        "Fertigung & Logistik"
      ]
    },
    "link": "https://www.agibot.com/products/D1_Max",
    "src": {
      "en": "AGIBOT D1 Max Quadruped Robot – Technical Specification Sheet (2026).",
      "de": "AGIBOT D1 Max Quadruped Robot – Technical Specification Sheet (2026)."
    },
    "gal": 5
  },
  {
    "id": "d1-ultra",
    "cat": "quadruped",
    "name": "AGIBOT D1 Ultra",
    "badge": null,
    "tagline": {
      "en": "Compact all-terrain quadruped for patrol and research",
      "de": "Kompakter Gelände-Vierbeiner für Patrouille und Forschung"
    },
    "desc": {
      "en": "D1 Ultra is the compact, reinforcement-learning driven quadruped: 16 kg, 3.7 m/s, 16 cm stairs and IP54, with standard expansion ports for LiDAR, RGB-D cameras and custom payloads.",
      "de": "D1 Ultra ist der kompakte, per Reinforcement Learning gesteuerte Vierbeiner: 16 kg, 3,7 m/s, 16 cm Stufen und IP54, mit Standard-Erweiterungsports für LiDAR, RGB-D-Kameras und eigene Nutzlasten."
    },
    "highlights": {
      "en": [
        "Reinforcement-learning locomotion with self-balancing and anti-tip behaviour",
        "3.7 m/s maximum speed; 16 cm stairs; 30° slope (up to 40°)",
        "Drive system with 2 kW/kg specific power",
        "Expansion ports: Ethernet, USB, power, SBUS, UART; secondary development supported",
        "IP54; 0–40 °C"
      ],
      "de": [
        "Reinforcement-Learning-Lokomotion mit Selbstbalance und Kippschutz",
        "3,7 m/s Höchstgeschwindigkeit; 16 cm Stufen; 30° Steigung (bis 40°)",
        "Antrieb mit 2 kW/kg spezifischer Leistung",
        "Erweiterungsports: Ethernet, USB, Strom, SBUS, UART; Eigenentwicklung unterstützt",
        "IP54; 0–40 °C"
      ]
    },
    "specs": [
      [
        "Standing dimensions",
        "Abmessungen stehend",
        "630 × 360 × 420 mm (L × W × H)",
        "630 × 360 × 420 mm (Länge × Breite × Höhe)"
      ],
      [
        "Weight (with battery)",
        "Gewicht (mit Akku)",
        "16 kg",
        "16 kg"
      ],
      [
        "Effective payload",
        "Nutzlast",
        "5 kg (max. 8 kg)",
        "5 kg (max. 8 kg)"
      ],
      [
        "Battery",
        "Akku",
        "4.6 Ah, 43.2 V",
        "4.6 Ah, 43.2 V"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "1–2 h (about 1 h at rated payload)",
        "1–2 h (etwa 1 h bei Nennlast)"
      ],
      [
        "Max. speed",
        "Max. Geschwindigkeit",
        "3.7 m/s",
        "3.7 m/s"
      ],
      [
        "Stair climbing",
        "Treppensteigen",
        "16 cm continuous",
        "16 cm kontinuierlich"
      ],
      [
        "Max. climbing angle",
        "Max. Steigung",
        "30° standard, up to 40°",
        "30° standardmäßig, bis zu 40°"
      ],
      [
        "Protection",
        "Schutzart",
        "IP54",
        "IP54"
      ],
      [
        "Operating temperature",
        "Betriebstemperatur",
        "0–40 °C",
        "0–40 °C"
      ],
      [
        "Expansion ports",
        "Erweiterungsports",
        "Ethernet, USB, power, SBUS, UART",
        "Ethernet, USB, Stromversorgung, SBUS, UART"
      ]
    ],
    "apps": {
      "en": [
        "Inspection & security patrol",
        "Research & development",
        "Events & stage performance"
      ],
      "de": [
        "Inspektion & Sicherheitspatrouille",
        "Forschung & Entwicklung",
        "Events & Bühnenshows"
      ]
    },
    "link": "https://store.agibot.com/products/d1-ultra",
    "src": {
      "en": "AGIBOT D1 Ultra Product Brochure and Product Sheet (2026).",
      "de": "AGIBOT D1 Ultra Produktbroschüre und Produktblatt (2026)."
    },
    "gal": 4
  },
  {
    "id": "d1-pro",
    "cat": "quadruped",
    "name": "AGIBOT D1 Pro",
    "badge": null,
    "tagline": {
      "en": "Agile quadruped for performance and entertainment",
      "de": "Agiler Vierbeiner für Performance und Entertainment"
    },
    "desc": {
      "en": "D1 Pro brings the D1 platform to shows and rentals: jumps, backflips, forward leaps and bipedal standing from a 15.5 kg body with 1–2 hours of battery life and a joystick remote.",
      "de": "D1 Pro bringt die D1-Plattform auf Bühnen und in den Verleih: Sprünge, Rückwärtssalti, Vorwärtssprünge und zweibeiniges Stehen aus einem 15,5 kg leichten Körper mit 1–2 Stunden Laufzeit und Joystick-Fernbedienung."
    },
    "highlights": {
      "en": [
        "Standard actions include forward and upward jump, biped standing, backflip and waving",
        "3.5 m/s maximum speed; 35 cm vertical jump; 16 cm stairs",
        "Peak joint torque 48 N·m; dual-encoder controller with no zero-position calibration",
        "1 h charging; 6 km range; IP54",
        "Real-time image transmission; joystick remote control"
      ],
      "de": [
        "Standardaktionen: Vorwärts- und Hochsprung, zweibeiniges Stehen, Rückwärtssalto, Winken",
        "3,5 m/s Höchstgeschwindigkeit; 35 cm Sprunghöhe; 16 cm Stufen",
        "Spitzenmoment 48 N·m; Dual-Encoder-Controller ohne Nullpunktkalibrierung",
        "1 h Laden; 6 km Reichweite; IP54",
        "Echtzeit-Bildübertragung; Joystick-Fernbedienung"
      ]
    },
    "specs": [
      [
        "Standing dimensions",
        "Abmessungen stehend",
        "635 × 360 × 420 mm (L × W × H)",
        "635 × 360 × 420 mm (Länge × Breite × Höhe)"
      ],
      [
        "Weight (with battery)",
        "Gewicht (mit Akku)",
        "15.5 kg",
        "15.5 kg"
      ],
      [
        "Effective payload",
        "Nutzlast",
        "5 kg",
        "5 kg"
      ],
      [
        "Battery",
        "Akku",
        "4.6 Ah, 43.2 V; charging 1 h",
        "4.6 Ah, 43.2 V; Laden 1 h"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "1–2 h; range 6 km",
        "1–2 h; Reichweite 6 km"
      ],
      [
        "Max. speed",
        "Max. Geschwindigkeit",
        "3.5 m/s",
        "3.5 m/s"
      ],
      [
        "Stair climbing",
        "Treppensteigen",
        "16 cm continuous",
        "16 cm kontinuierlich"
      ],
      [
        "Max. climbing angle",
        "Max. Steigung",
        "30° standard, up to 40°",
        "30° standardmäßig, bis zu 40°"
      ],
      [
        "Vertical jump",
        "Sprunghöhe",
        "35 cm",
        "35 cm"
      ],
      [
        "Max. joint torque",
        "Max. Gelenkmoment",
        "48 N·m",
        "48 N·m"
      ],
      [
        "Camera",
        "Kamera",
        "1920 × 1080, DFOV 122°",
        "1920 × 1080, DFOV 122°"
      ],
      [
        "Protection",
        "Schutzart",
        "IP54; 0–40 °C",
        "IP54; 0–40 °C"
      ],
      [
        "Remote",
        "Fernbedienung",
        "Joystick remote control",
        "Joystick-Fernsteuerung"
      ]
    ],
    "apps": {
      "en": [
        "Events & stage performance",
        "Retail & brand experience"
      ],
      "de": [
        "Events & Bühnenshows",
        "Handel & Markenerlebnis"
      ]
    },
    "link": "https://store.agibot.com/products/d1-pro",
    "src": {
      "en": "AGIBOT D1 Pro/Edu Quadruped Robot – Technical Specification Sheet; AGIBOT product brochure April 2026.",
      "de": "AGIBOT D1 Pro/Edu Quadruped Robot – Technical Specification Sheet; AGIBOT Produktbroschüre April 2026."
    },
    "gal": 3
  },
  {
    "id": "d1-edu",
    "cat": "quadruped",
    "name": "AGIBOT D1 Edu",
    "badge": null,
    "tagline": {
      "en": "Open quadruped platform for education and research",
      "de": "Offene Vierbeiner-Plattform für Lehre und Forschung"
    },
    "desc": {
      "en": "D1 Edu is the D1 Pro hardware with secondary development enabled: SDK access, expansion ports and standard actions for teaching locomotion, perception and control at universities and labs.",
      "de": "D1 Edu ist die D1-Pro-Hardware mit freigeschalteter Eigenentwicklung: SDK-Zugang, Erweiterungsports und Standardaktionen für die Lehre in Lokomotion, Wahrnehmung und Regelung an Hochschulen und Labors."
    },
    "highlights": {
      "en": [
        "Secondary development (SDK) – available in the Edu version only",
        "Expansion ports: Ethernet, 2 × USB, 2 × power, SBUS, UART",
        "Same mobility as D1 Pro: 3.5 m/s, 35 cm jump, 16 cm stairs, backflip",
        "15.5 kg, 1–2 h battery life, IP54",
        "Real-time image transmission for perception work"
      ],
      "de": [
        "Eigenentwicklung (SDK) – nur in der Edu-Version verfügbar",
        "Erweiterungsports: Ethernet, 2 × USB, 2 × Strom, SBUS, UART",
        "Gleiche Mobilität wie D1 Pro: 3,5 m/s, 35 cm Sprung, 16 cm Stufen, Rückwärtssalto",
        "15,5 kg, 1–2 h Laufzeit, IP54",
        "Echtzeit-Bildübertragung für Wahrnehmungsprojekte"
      ]
    },
    "specs": [
      [
        "Standing dimensions",
        "Abmessungen stehend",
        "635 × 360 × 420 mm (L × W × H)",
        "635 × 360 × 420 mm (Länge × Breite × Höhe)"
      ],
      [
        "Weight (with battery)",
        "Gewicht (mit Akku)",
        "15.5 kg",
        "15.5 kg"
      ],
      [
        "Effective payload",
        "Nutzlast",
        "5 kg",
        "5 kg"
      ],
      [
        "Battery",
        "Akku",
        "4.6 Ah, 43.2 V; charging 1 h",
        "4.6 Ah, 43.2 V; Laden 1 h"
      ],
      [
        "Battery life",
        "Akkulaufzeit",
        "1–2 h; range 6 km",
        "1–2 h; Reichweite 6 km"
      ],
      [
        "Max. speed",
        "Max. Geschwindigkeit",
        "3.5 m/s",
        "3.5 m/s"
      ],
      [
        "Stair climbing",
        "Treppensteigen",
        "16 cm continuous",
        "16 cm kontinuierlich"
      ],
      [
        "Vertical jump",
        "Sprunghöhe",
        "35 cm",
        "35 cm"
      ],
      [
        "Max. joint torque",
        "Max. Gelenkmoment",
        "48 N·m",
        "48 N·m"
      ],
      [
        "Camera",
        "Kamera",
        "1920 × 1080, DFOV 122°",
        "1920 × 1080, DFOV 122°"
      ],
      [
        "Secondary development",
        "Eigenentwicklung",
        "SDK supported",
        "SDK unterstützt"
      ],
      [
        "Expansion ports",
        "Erweiterungsports",
        "Ethernet, 2 × USB, 2 × power, SBUS, UART",
        "Ethernet, 2 × USB, 2 × Stromversorgung, SBUS, UART"
      ],
      [
        "Protection",
        "Schutzart",
        "IP54; 0–40 °C",
        "IP54; 0–40 °C"
      ]
    ],
    "apps": {
      "en": [
        "Research & development",
        "Inspection & security patrol"
      ],
      "de": [
        "Forschung & Entwicklung",
        "Inspektion & Sicherheitspatrouille"
      ]
    },
    "link": "https://store.agibot.com/products/d1-edu",
    "src": {
      "en": "AGIBOT D1 Pro/Edu Quadruped Robot – Technical Specification Sheet; AGIBOT product brochure April 2026 (SDK footnote).",
      "de": "AGIBOT D1 Pro/Edu Quadruped Robot – Technical Specification Sheet; AGIBOT Produktbroschüre April 2026 (SDK-Fußnote)."
    },
    "gal": 4
  },
  {
    "id": "c5",
    "cat": "cleaning",
    "name": "AGIBOT C5",
    "badge": null,
    "tagline": {
      "en": "Autonomous sweeping, scrubbing and dry mopping for large indoor areas",
      "de": "Autonomes Kehren, Schrubben und Trockenwischen für große Innenflächen"
    },
    "desc": {
      "en": "C5 is AGIBOT's cleaning robot for mid-to-large indoor environments: a 550 mm scrub width, up to 1980 m²/h, a 90 L water tank and a 3-hour runtime. The workstation charges, refills, drains and self-cleans the dirty-water tank, so one station can serve several robots.",
      "de": "C5 ist AGIBOTs Reinigungsroboter für mittlere bis große Innenflächen: 550 mm Schrubbreite, bis 1980 m²/h, 90-l-Wassertank und 3 Stunden Laufzeit. Die Workstation lädt, befüllt, entleert und reinigt den Schmutzwassertank selbst, sodass eine Station mehrere Roboter versorgt."
    },
    "highlights": {
      "en": [
        "Sweeping, scrubbing and dry mopping in one unit; debris pickup rate over 95 %",
        "Up to 1980 m²/h theoretical cleaning efficiency at 550 mm scrub width",
        "LiDAR and visual perception fused for navigation in changing environments",
        "Workstation with auto charging, auto refill and drain, dirty-water tank self-cleaning",
        "Operating noise below 68 dB(A); fan rated for 10,000 hours"
      ],
      "de": [
        "Kehren, Schrubben und Trockenwischen in einem Gerät; Aufnahmerate über 95 %",
        "Bis 1980 m²/h theoretische Reinigungsleistung bei 550 mm Schrubbreite",
        "LiDAR und Kamerawahrnehmung fusioniert für Navigation in wechselnden Umgebungen",
        "Workstation mit automatischem Laden, Befüllen und Entleeren sowie Selbstreinigung des Schmutzwassertanks",
        "Betriebsgeräusch unter 68 dB(A); Lüfter für 10.000 Stunden ausgelegt"
      ]
    },
    "specs": [
      [
        "Dimensions",
        "Abmessungen",
        "820 × 680 × 1130 mm (L × W × H)",
        "820 × 680 × 1130 mm (Länge × Breite × Höhe)"
      ],
      [
        "Weight",
        "Gewicht",
        "170 kg",
        "170 kg"
      ],
      [
        "Scrub width",
        "Schrubbreite",
        "550 mm",
        "550 mm"
      ],
      [
        "Max. efficiency",
        "Max. Flächenleistung",
        "1980 m²/h",
        "1980 m²/h"
      ],
      [
        "Debris pickup rate",
        "Aufnahmerate",
        "> 95 %",
        "> 95 %"
      ],
      [
        "Downforce",
        "Anpressdruck",
        "25 kg",
        "25 kg"
      ],
      [
        "Water tank",
        "Wassertank",
        "90 L",
        "90 L"
      ],
      [
        "Runtime",
        "Laufzeit",
        "3 h",
        "3 h"
      ],
      [
        "Battery",
        "Akku",
        "24 V, 80 Ah",
        "24 V, 80 Ah"
      ],
      [
        "Noise",
        "Geräusch",
        "< 68 dB(A)",
        "< 68 dB(A)"
      ],
      [
        "Fan lifespan",
        "Lüfterlebensdauer",
        "10,000 h",
        "10,000 h"
      ],
      [
        "Workstation",
        "Workstation",
        "520 × 310 × 1038 mm; auto charging, refill, drain, tank self-cleaning; 1800 W rated input",
        "520 × 310 × 1038 mm; automatisches Laden, Nachfüllen, Entleeren, Selbstreinigung des Tanks; 1800 W Nenneingangsleistung"
      ]
    ],
    "apps": {
      "en": [
        "Facility cleaning"
      ],
      "de": [
        "Gebäudereinigung"
      ]
    },
    "link": "https://store.agibot.com/products/c5",
    "src": {
      "en": "AGIBOT C5 product sheet (EN) and AGIBOT product brochure April 2026.",
      "de": "AGIBOT C5 Produktblatt (EN) und AGIBOT Produktbroschüre April 2026."
    },
    "gal": 4
  },
  {
    "id": "omnihand-pro",
    "cat": "hands",
    "name": "AGIBOT OmniHand Pro",
    "badge": null,
    "tagline": {
      "en": "19-DOF dexterous hand with 3D tactile sensing",
      "de": "Roboterhand mit 19 Freiheitsgraden und 3D-Taktilsensorik"
    },
    "desc": {
      "en": "OmniHand Pro combines 12 active and 7 passive degrees of freedom, fingertip force sensing and a CAN-FD interface for robot integration. Variant, weight and compatibility are confirmed for the application.",
      "de": "OmniHand Pro kombiniert 12 aktive und 7 passive Freiheitsgrade, Kraftsensorik an den Fingerspitzen und eine CAN-FD-Schnittstelle zur Roboterintegration. Variante, Gewicht und Kompatibilität werden für die Anwendung bestätigt."
    },
    "highlights": {
      "en": [
        "19 degrees of freedom; reference dimensions 207 × 98 × 56 mm, subject to variant",
        "Single-finger force up to 20 N for tool manipulation",
        "Multi-modal sensing: position, normal and tangential force at 0.1 N resolution",
        "Robot and arm integration requires model-specific compatibility confirmation"
      ],
      "de": [
        "19 Freiheitsgrade; Referenzmaße 207 × 98 × 56 mm, abhängig von der Variante",
        "Einzelfingerkraft bis 20 N für Werkzeughandhabung",
        "Multimodale Sensorik: Position, Normal- und Tangentialkraft mit 0,1 N Auflösung",
        "Integration in Roboter und Roboterarme erfordert modellspezifische Kompatibilitätsbestätigung"
      ]
    },
    "specs": [
      [
        "Degrees of freedom",
        "Freiheitsgrade",
        "12 active + 7 passive (19 total)",
        "12 aktiv + 7 passiv (insgesamt 19)"
      ],
      [
        "Weight",
        "Gewicht",
        "Configuration-specific value to be confirmed with quotation",
        "Konfigurationsabhängiger Wert wird mit dem Angebot bestätigt"
      ],
      [
        "Dimensions",
        "Abmessungen",
        "207 × 98 × 56 mm",
        "207 × 98 × 56 mm"
      ],
      [
        "Max. fingertip force",
        "Max. Fingerkraft",
        "20 N (typical)",
        "20 N (typisch)"
      ],
      [
        "Force perception",
        "Kraftsensorik",
        "3D force sensing on all fingertips",
        "3D-Krafterfassung an allen Fingerspitzen"
      ],
      [
        "Array resolution",
        "Array-Auflösung",
        "0.1 N",
        "0.1 N"
      ],
      [
        "Interface",
        "Schnittstelle",
        "CAN-FD",
        "CAN-FD"
      ],
      [
        "Compatibility",
        "Kompatibilität",
        "Model-specific confirmation required",
        "Modellspezifische Bestätigung erforderlich"
      ]
    ],
    "apps": {
      "en": [
        "Research & development",
        "Manufacturing & logistics",
        "Data collection"
      ],
      "de": [
        "Forschung & Entwicklung",
        "Fertigung & Logistik",
        "Datenerfassung"
      ]
    },
    "link": "https://www.agibot.com/products/OmniHand_O12",
    "src": {
      "en": "AGIBOT product brochure, April 2026 (OmniHand Pro page).",
      "de": "AGIBOT Produktbroschüre April 2026 (Seite OmniHand Pro)."
    },
    "gal": 6
  },
  {
    "id": "omnihand",
    "cat": "hands",
    "name": "AGIBOT OmniHand",
    "badge": null,
    "tagline": {
      "en": "Compact dexterous hand with optional tactile sensing",
      "de": "Kompakte Roboterhand mit optionaler Taktilsensorik"
    },
    "desc": {
      "en": "OmniHand is a compact dexterous hand with 10 active and 6 passive degrees of freedom and CAN-FD / RS485 connectivity. Weight, tactile-sensor configuration and robot compatibility are confirmed for the selected variant.",
      "de": "OmniHand ist eine kompakte Roboterhand mit 10 aktiven und 6 passiven Freiheitsgraden sowie CAN-FD-/RS485-Konnektivität. Gewicht, Tastsensor-Konfiguration und Roboterkompatibilität werden für die gewählte Variante bestätigt."
    },
    "highlights": {
      "en": [
        "Compact design; compatibility depends on the robot model and selected variant",
        "Human-like gesture interaction including back-of-hand touch",
        "Optional tactile sensing; sensor count and safety requirements confirmed per configuration",
        "CAN-FD / RS485 interface"
      ],
      "de": [
        "Kompakte Bauweise; Kompatibilität abhängig von Robotermodell und gewählter Variante",
        "Menschenähnliche Gesteninteraktion inklusive Berührung am Handrücken",
        "Optionale Taktilsensorik; Sensorzahl und Sicherheitsanforderungen werden je Konfiguration bestätigt",
        "CAN-FD-/RS485-Schnittstelle"
      ]
    },
    "specs": [
      [
        "Degrees of freedom",
        "Freiheitsgrade",
        "10 active + 6 passive",
        "10 aktiv + 6 passiv"
      ],
      [
        "Weight",
        "Gewicht",
        "Configuration-specific value to be confirmed with quotation",
        "Konfigurationsabhängiger Wert wird mit dem Angebot bestätigt"
      ],
      [
        "Dimensions",
        "Abmessungen",
        "180 × 85 × 38.5 mm",
        "180 × 85 × 38.5 mm"
      ],
      [
        "Payload capacity",
        "Tragfähigkeit",
        "Five-finger gripping strength ≥ 5 kg",
        "Greifkraft mit fünf Fingern ≥ 5 kg"
      ],
      [
        "Arrayed sensors",
        "Sensorarray",
        "Configuration-specific value to be confirmed with quotation",
        "Konfigurationsabhängiger Wert wird mit dem Angebot bestätigt"
      ],
      [
        "Force perception",
        "Kraftsensorik",
        "Fingertips, palm and back of hand: 1D force",
        "Fingerspitzen, Handfläche und Handrücken: 1D-Kraft"
      ],
      [
        "Array resolution",
        "Array-Auflösung",
        "0.1 N (with tactile option)",
        "0.1 N (mit taktiler Option)"
      ],
      [
        "Interface",
        "Schnittstelle",
        "CAN-FD / RS485",
        "CAN-FD / RS485"
      ]
    ],
    "apps": {
      "en": [
        "Reception & guided tours",
        "Research & development",
        "Data collection"
      ],
      "de": [
        "Empfang & Führungen",
        "Forschung & Entwicklung",
        "Datenerfassung"
      ]
    },
    "link": "https://store.agibot.com/products/omnihand-2025",
    "src": {
      "en": "AGIBOT product brochure, April 2026 (OmniHand page); AGIBOT store listing.",
      "de": "AGIBOT Produktbroschüre April 2026 (Seite OmniHand); AGIBOT-Store-Eintrag."
    },
    "gal": 6
  },
  {
    "id": "omnihand-3-lite",
    "cat": "hands",
    "name": "AGIBOT OmniHand 3 Lite",
    "badge": null,
    "tagline": {
      "en": "Ultra-compact 350 g hand built for impact and everyday gestures",
      "de": "Ultrakompakte 350-g-Hand für Stöße und Alltagsgesten"
    },
    "desc": {
      "en": "Supplier-provided reference configuration; product-specific documentation and compatibility require confirmation. OmniHand 3 Lite is the mouse-sized dexterous hand: 4 active and 3 passive degrees of freedom, 350 g, impact-tested for dynamic motions such as hand-supported cartwheels, with an open-source kit version and Dex-UMI data-collection compatibility.",
      "de": "Vom Lieferanten bereitgestellte Referenzkonfiguration; produktspezifische Dokumentation und Kompatibilität bedürfen der Bestätigung. OmniHand 3 Lite ist die mausgroße Roboterhand: 4 aktive und 3 passive Freiheitsgrade, 350 g, stoßgeprüft für dynamische Bewegungen wie handgestützte Radschläge, mit Open-Source-Kit-Version und Dex-UMI-Kompatibilität für die Datenerfassung."
    },
    "highlights": {
      "en": [
        "The smallest dexterous hand in AGIBOT's range – 140 × 70 × 24 mm, 350 g",
        "Pendulum-impact and multi-angle drop tested for real-world robustness",
        "Supplier-described position control and hybrid force-position control; opening/closing time to be confirmed",
        "Natively compatible with Dex-UMI data-collection systems; open-source kit available"
      ],
      "de": [
        "Die kleinste Roboterhand im AGIBOT-Programm – 140 × 70 × 24 mm, 350 g",
        "Pendelschlag- und Mehrwinkel-Falltests für Robustheit im Alltag",
        "Vom Lieferanten beschriebene Positionsregelung und hybride Kraft-Positions-Regelung; Öffnungs-/Schließzeit ist zu bestätigen",
        "Nativ kompatibel mit Dex-UMI-Datenerfassung; Open-Source-Kit verfügbar"
      ]
    },
    "specs": [
      [
        "Degrees of freedom",
        "Freiheitsgrade",
        "4 active + 3 passive",
        "4 aktiv + 3 passiv"
      ],
      [
        "Weight",
        "Gewicht",
        "350 g",
        "350 g"
      ],
      [
        "Dimensions",
        "Abmessungen",
        "140 × 70 × 24 mm",
        "140 × 70 × 24 mm"
      ],
      [
        "Control modes",
        "Regelungsarten",
        "Position control; hybrid force-position control",
        "Positionsregelung; hybride Kraft-Positionsregelung"
      ],
      [
        "Repeatability",
        "Wiederholgenauigkeit",
        "±0.5 mm",
        "±0.5 mm"
      ],
      [
        "Open/close time",
        "Öffnen/Schließen",
        "Configuration-specific timing to be confirmed",
        "Konfigurationsabhängige Zeit ist zu bestätigen"
      ],
      [
        "Interface",
        "Schnittstelle",
        "CAN-FD / RS485",
        "CAN-FD / RS485"
      ]
    ],
    "apps": {
      "en": [
        "Reception & guided tours",
        "Research & development",
        "Data collection"
      ],
      "de": [
        "Empfang & Führungen",
        "Forschung & Entwicklung",
        "Datenerfassung"
      ]
    },
    "link": "https://www.agibot.com/",
    "src": {
      "en": "AGIBOT product brochure, April 2026 (OmniHand 3 Lite page).",
      "de": "AGIBOT Produktbroschüre April 2026 (Seite OmniHand 3 Lite)."
    },
    "gal": 2
  },
  {
    "id": "omnipicker-3",
    "cat": "accessories",
    "name": "AGIBOT OmniPicker 3",
    "badge": null,
    "tagline": {
      "en": "Industrial adaptive gripper with 140 N force and 1 million cycles",
      "de": "Industrieller adaptiver Greifer mit 140 N und 1 Million Zyklen"
    },
    "desc": {
      "en": "Supplier-provided reference configuration; product-specific documentation and compatibility require confirmation. OmniPicker 3 is the industrial-grade adaptive gripper for embodied-intelligence applications: over 100 N of gripping force, a 120 mm stroke, ±0.1 mm repeatability and support for depth or fisheye camera integration.",
      "de": "Vom Lieferanten bereitgestellte Referenzkonfiguration; produktspezifische Dokumentation und Kompatibilität bedürfen der Bestätigung. OmniPicker 3 ist der industrietaugliche adaptive Greifer für Embodied-Intelligence-Anwendungen: über 100 N Greifkraft, 120 mm Hub, ±0,1 mm Wiederholgenauigkeit und Integration von Tiefen- oder Fisheye-Kameras."
    },
    "highlights": {
      "en": [
        "Adaptive grasping of standard and irregular items with quick changeover",
        "High tactile coverage with precise force control and open data acquisition",
        "Rated for 1 million full cycles at industrial-grade strength",
        "Depth or fisheye camera integration"
      ],
      "de": [
        "Adaptives Greifen von Standard- und unregelmäßigen Objekten mit schnellem Wechsel",
        "Hohe taktile Abdeckung mit präziser Kraftregelung und offener Datenerfassung",
        "Ausgelegt für 1 Million Vollzyklen in Industriequalität",
        "Integration von Tiefen- oder Fisheye-Kamera"
      ]
    },
    "specs": [
      [
        "Weight",
        "Gewicht",
        "800 g",
        "800 g"
      ],
      [
        "Max. force",
        "Max. Kraft",
        "140 N",
        "140 N"
      ],
      [
        "Min. force",
        "Min. Kraft",
        "1–2 N",
        "1–2 N"
      ],
      [
        "Max. stroke",
        "Max. Hub",
        "120 mm",
        "120 mm"
      ],
      [
        "Max. payload",
        "Max. Traglast",
        "5 kg",
        "5 kg"
      ],
      [
        "Repeatability",
        "Wiederholgenauigkeit",
        "±0.1 mm",
        "±0.1 mm"
      ],
      [
        "Absolute positioning accuracy",
        "Absolute Positioniergenauigkeit",
        "0.5 mm",
        "0.5 mm"
      ],
      [
        "Interface",
        "Schnittstelle",
        "CAN-FD / RS485",
        "CAN-FD / RS485"
      ]
    ],
    "apps": {
      "en": [
        "Manufacturing & logistics",
        "Data collection"
      ],
      "de": [
        "Fertigung & Logistik",
        "Datenerfassung"
      ]
    },
    "link": "https://www.agibot.com/",
    "src": {
      "en": "AGIBOT product brochure, April 2026 (OmniPicker 3 page).",
      "de": "AGIBOT Produktbroschüre April 2026 (Seite OmniPicker 3)."
    },
    "gal": 2
  },
  {
    "id": "vr-kit",
    "cat": "accessories",
    "name": "VR Teleoperation Kit",
    "badge": null,
    "tagline": {
      "en": "Beyond-visual-range control with synchronised audio and video",
      "de": "Fernsteuerung außer Sichtweite mit synchronem Bild und Ton"
    },
    "desc": {
      "en": "Supplier-provided reference configuration; product-specific documentation and compatibility require confirmation. AGIBOT's optional VR teleoperation accessories – headset and handheld controllers, with a motion-tracking sensor on data-collection configurations – enable beyond-visual-range remote operation, remote avatar applications and demonstration recording for embodied-AI training.",
      "de": "Vom Lieferanten bereitgestellte Referenzkonfiguration; produktspezifische Dokumentation und Kompatibilität bedürfen der Bestätigung. AGIBOTs optionales VR-Teleoperationszubehör – Headset und Handcontroller, bei Datenerfassungskonfigurationen mit Motion-Tracking-Sensor – ermöglicht Fernbedienung außer Sichtweite, Remote-Avatar-Anwendungen und die Aufzeichnung von Demonstrationen für das Training von Embodied AI."
    },
    "highlights": {
      "en": [
        "Audio/video-supported remote operation; latency depends on the system and connection",
        "Remote avatar applications and teleoperated task execution",
        "Demonstration recording for imitation and reinforcement learning",
        "Compatibility must be confirmed for the specific robot model and project"
      ],
      "de": [
        "Audio-/videogestützte Fernbedienung; Latenz abhängig von System und Verbindung",
        "Remote-Avatar-Anwendungen und teleoperierte Aufgabenausführung",
        "Aufzeichnung von Demonstrationen für Imitations- und Reinforcement-Learning",
        "Kompatibilität muss für das konkrete Robotermodell und Projekt bestätigt werden"
      ]
    },
    "specs": [
      [
        "Contents",
        "Lieferumfang",
        "VR headset, handheld controllers; motion-tracking sensor on data-collection configurations",
        "VR-Headset, Handheld-Controller; Bewegungsverfolgungssensor bei Konfigurationen zur Datenerfassung"
      ],
      [
        "Function",
        "Funktion",
        "Teleoperation with audio/video support; operating limits and latency confirmed per system",
        "Teleoperation mit Audio-/Videounterstützung; Betriebsgrenzen und Latenz werden je System bestätigt"
      ],
      [
        "Compatibility",
        "Kompatibilität",
        "Model-specific compatibility must be confirmed before quotation; no cross-model compatibility is assumed",
        "Modellspezifische Kompatibilität muss vor Angebotserstellung bestätigt werden; keine pauschale Kompatibilität zwischen Modellen"
      ]
    ],
    "apps": {
      "en": [
        "Data collection",
        "Research & development"
      ],
      "de": [
        "Datenerfassung",
        "Forschung & Entwicklung"
      ]
    },
    "link": "https://www.agibot.com/products/VR",
    "src": {
      "en": "AGIBOT product brochure, April 2026 (X2 Ultra optional configurations; X2 REC teleoperation); AGIBOT G2 User Manual (teleoperation kits).",
      "de": "AGIBOT Produktbroschüre April 2026 (X2 Ultra Optionen; X2 REC Teleoperation); AGIBOT G2 Benutzerhandbuch (Teleoperationskits)."
    },
    "gal": 1
  }
];
export const categories=[
  {
    "id": "humanoid",
    "label": {
      "en": "Humanoid robots",
      "de": "Humanoide Roboter"
    }
  },
  {
    "id": "industrial",
    "label": {
      "en": "Industrial robots",
      "de": "Industrieroboter"
    }
  },
  {
    "id": "quadruped",
    "label": {
      "en": "Quadruped robots",
      "de": "Vierbeinige Roboter"
    }
  },
  {
    "id": "cleaning",
    "label": {
      "en": "Cleaning robots",
      "de": "Reinigungsroboter"
    }
  },
  {
    "id": "hands",
    "label": {
      "en": "Dexterous hands",
      "de": "Roboterhände"
    }
  },
  {
    "id": "accessories",
    "label": {
      "en": "Grippers & accessories",
      "de": "Greifer & Zubehör"
    }
  }
];
export const applications=[
  {
    "id": "reception",
    "img": "img/site/application-customer-events.webp",
    "products": [
      "a3-ultra",
      "a2-ultra",
      "x2-ultra",
      "g2"
    ],
    "title": {
      "en": "Customer Interaction & Events",
      "de": "Kundeninteraktion & Events"
    },
    "text": {
      "en": "Reception, guidance, brand experiences, exhibitions and other customer-facing environments. Humanoids greet visitors by face, answer questions from your knowledge base and guide guests through a showroom or stand.",
      "de": "Empfang, Besucherführung, Markenerlebnisse, Messen und andere kundennahe Umgebungen. Humanoide erkennen Besucher, beantworten Fragen aus Ihrer Wissensbasis und führen Gäste durch Showroom oder Stand."
    },
    "image": "/images/robotics-catalogue/site/application-customer-events.webp"
  },
  {
    "id": "tours",
    "img": "img/site/app-reception.webp",
    "products": [
      "a3-ultra",
      "a2-ultra",
      "x2-ultra"
    ],
    "title": {
      "en": "Reception & Guided Tours",
      "de": "Empfang & Führungen"
    },
    "text": {
      "en": "Showroom tours, hotel and corporate reception, front-desk duty and visitor navigation with standardised 24-hour service. Humanoids greet visitors by face, answer questions from your knowledge base and guide guests through exhibitions.",
      "de": "Showroom-Führungen, Hotel- und Firmenempfang, Front-Desk-Dienst und Besucherleitung mit standardisiertem 24-Stunden-Service. Humanoide erkennen Besucher, beantworten Fragen aus Ihrer Wissensbasis und führen durch Ausstellungen."
    },
    "image": "/images/robotics-catalogue/site/app-reception.webp"
  },
  {
    "id": "industry",
    "img": "img/site/app-manufacturing.webp",
    "products": [
      "g2",
      "omnihand-pro",
      "omnipicker-3",
      "d1-maxpro"
    ],
    "title": {
      "en": "Manufacturing & Automation",
      "de": "Fertigung & Automatisierung"
    },
    "text": {
      "en": "Precision operations, industrial workflows and evaluation in production environments. Force-controlled arms handle assembly, sorting and material handling next to people on existing lines.",
      "de": "Präzisionsarbeit, industrielle Abläufe und Evaluierung in Produktionsumgebungen. Kraftgeregelte Arme übernehmen Montage, Sortierung und Materialhandling neben Menschen an bestehenden Linien."
    },
    "image": "/images/robotics-catalogue/site/app-manufacturing.webp"
  },
  {
    "id": "research",
    "img": "img/site/app-research.webp",
    "products": [
      "d1-edu",
      "x2-ultra",
      "omnihand-3-lite",
      "a3-ultra"
    ],
    "title": {
      "en": "Research & Development",
      "de": "Forschung & Entwicklung"
    },
    "text": {
      "en": "Robotics research, embodied-AI development, universities and technology evaluation. Open SDKs (AimDK), expansion ports and URDF models on the X2, A-series, G2 and D1 Edu platforms.",
      "de": "Robotikforschung, Embodied-AI-Entwicklung, Hochschulen und Technologieevaluierung. Offene SDKs (AimDK), Erweiterungsports und URDF-Modelle auf X2, A-Serie, G2 und D1 Edu."
    },
    "image": "/images/robotics-catalogue/site/app-research.webp"
  },
  {
    "id": "inspection",
    "img": "img/gallery/d1-max-5.webp",
    "products": [
      "d1-maxpro",
      "d1-max",
      "d1-ultra"
    ],
    "title": {
      "en": "Inspection & Security Patrol",
      "de": "Inspektion & Sicherheitspatrouille"
    },
    "text": {
      "en": "Meter reading, defect detection and perimeter patrols on plants, campuses and utility tunnels. IP67 quadrupeds cover stairs and rough terrain from −20 °C to 55 °C and return to charge autonomously.",
      "de": "Zählerablesung, Fehlererkennung und Perimeterpatrouillen auf Werksgeländen, Campus und in Versorgungstunneln. IP67-Vierbeiner bewältigen Treppen und Gelände von −20 °C bis 55 °C und laden autonom."
    },
    "image": "/images/robotics-catalogue/gallery/d1-max-5.webp"
  },
  {
    "id": "data",
    "img": "img/gallery/vr-kit-1.webp",
    "products": [
      "vr-kit",
      "x2-ultra",
      "g2",
      "a3-ultra"
    ],
    "title": {
      "en": "Data Collection & Teleoperation",
      "de": "Datenerfassung & Teleoperation"
    },
    "text": {
      "en": "Demonstration recording, teleoperation and deployment for embodied AI. VR kits control robots beyond visual range with synchronised audio and video; G2 and X2 REC configurations are built for data acquisition.",
      "de": "Aufzeichnung von Demonstrationen, Teleoperation und Deployment für Embodied AI. VR-Kits steuern Roboter außer Sichtweite mit synchronem Bild und Ton; G2- und X2-REC-Konfigurationen sind für die Datenerfassung ausgelegt."
    },
    "image": "/images/robotics-catalogue/gallery/vr-kit-1.webp"
  },
  {
    "id": "cleaning",
    "img": "img/gallery/c5-3.webp",
    "products": [
      "c5"
    ],
    "title": {
      "en": "Facility Cleaning",
      "de": "Gebäudereinigung"
    },
    "text": {
      "en": "Autonomous sweeping, scrubbing and dry mopping for malls, airports, offices and factories. The workstation handles charging, refill and drain so one station serves several robots.",
      "de": "Autonomes Kehren, Schrubben und Trockenwischen für Einkaufszentren, Flughäfen, Büros und Fabriken. Die Workstation übernimmt Laden, Befüllen und Entleeren, sodass eine Station mehrere Roboter versorgt."
    },
    "image": "/images/robotics-catalogue/gallery/c5-3.webp"
  }
];
export const company={
  "name": "Tekpoint GmbH",
  "hq": {
    "street": "Leopold Ungar Platz 2",
    "city": "1190 Vienna",
    "cityDe": "1190 Wien",
    "country": {
      "en": "Austria",
      "de": "Österreich"
    },
    "phone": "+43 1 3616670",
    "email": "dach@tekpoint.com"
  },
  "de": {
    "street": "Am Seestern 8",
    "city": "40547 Düsseldorf",
    "country": {
      "en": "Germany",
      "de": "Deutschland"
    },
    "phone": "+49 211 36183789-0",
    "email": "dach@tekpoint.com"
  },
  "rs": {
    "company": "West Balkan Distribution Doo",
    "street": "Augusta Cesarca 5",
    "city": "11050 Belgrade",
    "cityDe": "11050 Belgrad",
    "country": {
      "en": "Serbia",
      "de": "Serbien"
    },
    "email": "info@tekpoint.com"
  },
  "info": "info@tekpoint.com",
  "robotics": "robotics@tekpoint.com",
  "team": [
    {
      "name": "Thomas Beimbauer",
      "email": "T.Beimbauer@tekpoint.com",
      "img": "img/site/portrait-thomas-beimbauer.webp",
      "image": "/images/robotics-catalogue/site/portrait-thomas-beimbauer.webp"
    },
    {
      "name": "Slava Rukin",
      "email": "S.Rukin@tekpoint.com",
      "img": "img/site/portrait-slava-rukin.webp",
      "image": "/images/robotics-catalogue/site/portrait-slava-rukin.webp"
    }
  ],
  "social": {
    "linkedin": "https://www.linkedin.com/company/tekpoint",
    "xing": "https://www.xing.com/pages/tekpointgmbh",
    "youtube": "https://www.youtube.com/@tekpointgmbh8118"
  }
};
export const overview={
  "en": {
    "how_title": "How to work with Tekpoint",
    "how_sub": "You do not need to know which robot or configuration you need before contacting us. Start with your use case – we will help structure the next steps.",
    "how": [
      [
        "Tell us your use case",
        "Share your application, environment, target market, project stage and key requirements with our Robotics team."
      ],
      [
        "Identify the right solution",
        "We help evaluate the relevant AGIBOT platform, configuration and commercial approach for your project."
      ],
      [
        "Move into evaluation & supply",
        "Tekpoint coordinates the commercial process, European supply and the interfaces required to move the opportunity forward."
      ]
    ],
    "why_title": "Why Tekpoint?",
    "why_sub": "AGIBOT provides the robotics technology. Tekpoint provides the European commercial interface and market access.",
    "why": [
      [
        "European Distribution",
        "Commercial distribution of AGIBOT robotics solutions across European markets.",
        "https://tekpoint.com/en/services/distribution/"
      ],
      [
        "Market Development",
        "Development of reseller, integrator and enterprise opportunities across Europe.",
        "https://tekpoint.com/en/services/market-entry/"
      ],
      [
        "EU Market Access",
        "Support with European product requirements, documentation and market-entry processes.",
        "https://tekpoint.com/en/services/eu-compliance/"
      ],
      [
        "Logistics & Support",
        "European logistics, fulfilment, RMA coordination and a local commercial interface.",
        "https://tekpoint.com/en/services/logistics/"
      ]
    ],
    "contact_title": "Talk to our Robotics team",
    "offices": "Offices"
  },
  "de": {
    "how_title": "So arbeiten Sie mit Tekpoint",
    "how_sub": "Sie müssen nicht wissen, welchen Roboter oder welche Konfiguration Sie brauchen, bevor Sie uns kontaktieren. Beginnen Sie mit Ihrem Anwendungsfall – wir strukturieren die nächsten Schritte.",
    "how": [
      [
        "Anwendungsfall schildern",
        "Teilen Sie Anwendung, Umgebung, Zielmarkt, Projektphase und Kernanforderungen mit unserem Robotics-Team."
      ],
      [
        "Passende Lösung finden",
        "Wir bewerten gemeinsam die relevante AGIBOT-Plattform, Konfiguration und den kommerziellen Ansatz für Ihr Projekt."
      ],
      [
        "Evaluierung & Lieferung",
        "Tekpoint koordiniert den kommerziellen Prozess, die europäische Lieferung und die Schnittstellen, die das Projekt voranbringen."
      ]
    ],
    "why_title": "Warum Tekpoint?",
    "why_sub": "AGIBOT liefert die Robotiktechnologie. Tekpoint liefert die europäische kommerzielle Schnittstelle und den Marktzugang.",
    "why": [
      [
        "Europäische Distribution",
        "Kommerzieller Vertrieb von AGIBOT-Robotiklösungen in den europäischen Märkten.",
        "https://tekpoint.com/de/services/distribution/"
      ],
      [
        "Marktentwicklung",
        "Aufbau von Reseller-, Integrator- und Unternehmenskunden in ganz Europa.",
        "https://tekpoint.com/de/services/market-entry/"
      ],
      [
        "EU-Marktzugang",
        "Unterstützung bei europäischen Produktanforderungen, Dokumentation und Markteintritt.",
        "https://tekpoint.com/de/services/eu-compliance/"
      ],
      [
        "Logistik & Support",
        "Europäische Logistik, Fulfilment, RMA-Koordination und eine lokale kommerzielle Schnittstelle.",
        "https://tekpoint.com/de/services/logistics/"
      ]
    ],
    "contact_title": "Sprechen Sie mit unserem Robotics-Team",
    "offices": "Standorte"
  }
};
