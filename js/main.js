const profiles={
"Baden-Württemberg":["Jagd- und Wildtiermanagementgesetz (JWMG)","Wildtiermanagement","Jagd- und Wildtiermanagement verbindet Jagdausübung, Hege und Wildtiermanagement in einem eigenen Landesgesetz.","Besonders die landesspezifischen Management- und Verfahrensregeln sowie aktuelle Verordnungen prüfen.","https://www.landesrecht-bw.de/"],
"Bayern":["Bayerisches Jagdgesetz (BayJG)","Landesgesetz & Ausführung","Neben dem Bundesrecht gelten das BayJG und ergänzende Ausführungsbestimmungen des Landes.","Aktuelle Ausführungsverordnung, Jagdzeiten und Bekanntmachungen kontrollieren.","https://www.gesetze-bayern.de/"],
"Berlin":["Landesjagdgesetz Berlin","Stadtgebiet","Im dicht besiedelten Stadtstaat sind örtliche Zuständigkeiten, befriedete Bezirke und besondere Schutzregeln besonders wichtig.","Vor Ort klären, ob die Fläche jagdlich genutzt werden darf und welche Behörde zuständig ist.","https://gesetze.berlin.de/"],
"Brandenburg":["Jagdgesetz für das Land Brandenburg","Landesrecht & Ausführung","Das Landesjagdgesetz wird durch landesspezifische Durchführungsvorschriften ergänzt.","Aktuelle Jagdzeiten, Artenregelungen und behördliche Vorgaben nachsehen.","https://bravors.brandenburg.de/"],
"Bremen":["Landesjagdrecht Bremen","Stadtstaat","Bundesrecht gilt zusammen mit landesrechtlichen Regeln und örtlichen Zuständigkeiten.","Zuständige Jagdbehörde und örtliche Beschränkungen vorab ermitteln.","https://www.transparenz.bremen.de/"],
"Hamburg":["Landesjagdrecht Hamburg","Stadtstaat","Landesrechtliche Ergänzungen gelten neben dem Bundesjagdgesetz; Stadtgebiet und Schutzgebiete erfordern besondere Aufmerksamkeit.","Flächenstatus, Schutzgebiete und behördliche Zuständigkeit prüfen.","https://www.landesrecht-hamburg.de/"],
"Hessen":["Hessisches Jagdrecht","Landesrecht & Ausführung","Das Bundesjagdgesetz wird durch hessische Gesetze und Verordnungen konkretisiert.","Landesverordnungen, Jagdzeiten und aktuelle Erlasse prüfen.","https://www.rv.hessenrecht.hessen.de/"],
"Mecklenburg-Vorpommern":["Landesjagdrecht Mecklenburg-Vorpommern","Küsten- und Binnenland","Landesrechtliche Regeln ergänzen die bundesweiten Grundlagen; regionale Schutz- und Lebensraumvorgaben können relevant sein.","Aktuelle Jagdzeiten, Schutzgebiete und Durchführungsvorschriften beachten.","https://www.landesrecht-mv.de/"],
"Niedersachsen":["Niedersächsisches Jagdrecht","Landesrecht & Ausführung","Niedersächsische Vorschriften ergänzen die bundesweiten Regeln, unter anderem über landesspezifische Verordnungen.","Aktuelle Landesregelungen und Informationen der Jagdbehörde heranziehen.","https://www.nds-voris.de/"],
"Nordrhein-Westfalen":["Landesjagdgesetz NRW","Landesgesetz & Verordnungen","Neben dem Bundesjagdgesetz gelten das Landesjagdgesetz NRW und ergänzende Vorschriften, etwa zu Jagdzeiten und Jagdausübung.","Jagdrecht, Jagdzeitenverordnung und Hinweise der unteren Jagdbehörde prüfen.","https://recht.nrw.de/"],
"Rheinland-Pfalz":["Landesjagdgesetz Rheinland-Pfalz","Eigenständiges Landesgesetz","Rheinland-Pfalz regelt viele Fragen in einem eigenen Landesjagdgesetz und ergänzenden Verordnungen.","Aktuelle Landesgesetzfassung, Verordnungen und behördliche Hinweise prüfen.","https://landesrecht.rlp.de/"],
"Saarland":["Saarländisches Jagdrecht","Landesrecht & Ausführung","Landesrechtliche Ergänzungen konkretisieren das Bundesjagdgesetz für das Saarland.","Jagdzeiten, lokale Auflagen und Zuständigkeiten aktuell prüfen.","https://recht.saarland.de/"],
"Sachsen":["Sächsisches Jagdrecht","Landesrecht & Ausführung","Sächsische Gesetze und Verordnungen ergänzen den bundesrechtlichen Rahmen.","Aktuelle Landesregelungen und Bekanntmachungen der Jagdbehörden prüfen.","https://www.revosax.sachsen.de/"],
"Sachsen-Anhalt":["Jagdrecht Sachsen-Anhalt","Landesrecht & Ausführung","Landesrechtliche Bestimmungen ergänzen das Bundesjagdgesetz, insbesondere bei der konkreten Ausgestaltung der Jagdausübung.","Jagdzeiten, Verordnungen und zuständige Behörde kontrollieren.","https://www.landesrecht.sachsen-anhalt.de/"],
"Schleswig-Holstein":["Landesjagdrecht Schleswig-Holstein","Küsten- und Binnenland","Das Landesrecht ergänzt Bundesregeln; Schutzgebiete und regionale Besonderheiten können für die Jagdausübung relevant sein.","Aktuelle Landesvorschriften, Schutzgebiete und Jagdzeiten prüfen.","https://www.gesetze-rechtsprechung.sh.juris.de/"],
"Thüringen":["Thüringer Jagdrecht","Landesrecht & Ausführung","Thüringer Gesetze und Verordnungen konkretisieren die bundesweiten Grundlagen.","Aktuelle Jagdzeiten, landesrechtliche Verordnungen und Behördenhinweise heranziehen.","https://landesrecht.thueringen.de/" ]};
const huntInfo={
 "Baden-Württemberg": {
  "wild": [
   "Rotwild (nur in Rotwildgebieten)",
   "Rehwild",
   "Schwarzwild",
   "Gamswild (Schwarzwald)",
   "Damwild",
   "Muffelwild",
   "Feldhase, Fuchs, Dachs, Waschbär, Marderhund"
  ],
  "hinweise": [
   "Das JWMG kennt Schalenwild, Wild mit Jagdzeit und ganzjährig geschützte Arten (Wildtiermanagement).",
   "Rotwild und Gamswild nur in festgelegten Gebieten; außerhalb besondere Regeln.",
   "Jagdzeiten und Ausnahmen in der Jagdzeitenverordnung BW prüfen."
  ]
 },
 "Bayern": {
  "wild": [
   "Rehwild",
   "Rotwild (Rotwildgebiete)",
   "Gamswild (Alpen, Voralpen)",
   "Schwarzwild",
   "Damwild",
   "Feldhase, Fuchs, Dachs",
   "Federwild wie Stockente, Fasan, Ringeltaube"
  ],
  "hinweise": [
   "Rotwild darf nur in Rotwildgebieten dauerhaft vorkommen; außerhalb gelten besondere Regeln.",
   "Gamswild hat in den Bergen eigene, verkürzte Jagdzeiten.",
   "Im Bergwald gilt der Grundsatz „Wald vor Wild“; Abschusspläne für Rehwild sind besonders relevant."
  ]
 },
 "Berlin": {
  "wild": [
   "Schwarzwild",
   "Rehwild",
   "Fuchs, Waschbär, Marderhund",
   "Wildkaninchen",
   "Federwild wie Ringeltaube"
  ],
  "hinweise": [
   "Jagd nur in nicht befriedeten Bezirken; große Teile des Stadtgebiets sind befriedet.",
   "Stadtjagd mit Schwerpunkt Schwarzwild- und Raubwildmanagement (Wildschweine im Stadtgebiet)."
  ]
 },
 "Brandenburg": {
  "wild": [
   "Rotwild",
   "Damwild",
   "Rehwild",
   "Schwarzwild",
   "Muffelwild",
   "Feldhase, Fuchs, Dachs",
   "Waschbär, Marderhund, Mink",
   "Wolf (nicht bejagbar, streng geschützt)"
  ],
  "hinweise": [
   "Hohe Schalenwilddichte; Rot- und Schwarzwild sind jagdlich zentral.",
   "Wolf unterliegt strengem Artenschutz – keine Bejagung.",
   "Für Schwarzwild gelten wegen ASP-Maßnahmen teils besondere Regelungen und Sperrzonen."
  ]
 },
 "Bremen": {
  "wild": [
   "Rehwild",
   "Schwarzwild (selten)",
   "Fuchs",
   "Wildkaninchen, Feldhase",
   "Wasserfederwild (z. B. Stockente)"
  ],
  "hinweise": [
   "Kleines Jagdgebiet; Stadtstaat mit vielen befriedeten und geschützten Flächen.",
   "Örtliche Zuständigkeit der Jagdbehörde und Schutzgebiete vorab klären."
  ]
 },
 "Hamburg": {
  "wild": [
   "Rehwild",
   "Schwarzwild",
   "Fuchs, Waschbär",
   "Feldhase, Wildkaninchen",
   "Wasserfederwild"
  ],
  "hinweise": [
   "Viele Flächen sind befriedet oder naturschutzrechtlich geschützt.",
   "Jagdzeiten Hamburg können von den Bundeszeiten abweichen."
  ]
 },
 "Hessen": {
  "wild": [
   "Rehwild",
   "Rotwild (Rotwildgebiete)",
   "Schwarzwild",
   "Damwild",
   "Muffelwild",
   "Feldhase, Fuchs, Dachs",
   "Federwild wie Fasan, Stockente, Ringeltaube"
  ],
  "hinweise": [
   "Rotwild mit regionaler Verbreitung (z. B. Taunus, Spessart, Rhön).",
   "Die Hessische Jagdverordnung regelt Jagdzeiten und Ausnahmen; auch Aufhebungen einzelner Zeiten sind möglich."
  ]
 },
 "Mecklenburg-Vorpommern": {
  "wild": [
   "Rotwild",
   "Damwild",
   "Rehwild",
   "Schwarzwild",
   "Feldhase, Fuchs, Dachs",
   "Waschbär, Marderhund",
   "Wasserfederwild an der Küste"
  ],
  "hinweise": [
   "Hoher Schalenwildanteil, Schwerpunkt Rot- und Schwarzwild.",
   "Küsten-/Naturschutzgebiete und Nationalparks mit eigenen Auflagen.",
   "ASP-Vorsorge beeinflusst die Schwarzwildbejagung."
  ]
 },
 "Niedersachsen": {
  "wild": [
   "Rehwild",
   "Rotwild (Harz, Heide)",
   "Damwild",
   "Schwarzwild",
   "Feldhase, Fuchs, Dachs",
   "Wasserfederwild, Gänse (Küste)",
   "Waschbär, Marderhund"
  ],
  "hinweise": [
   "Das Niedersächsische Jagdrecht regelt Jagdzeiten in einer eigenen Verordnung; Gänsejagd an der Küste besonders beachten.",
   "Der Wolf ist streng geschützt; Abweichungen nur im Rahmen aktueller Vorgaben."
  ]
 },
 "Nordrhein-Westfalen": {
  "wild": [
   "Rehwild",
   "Rotwild (Eifel, Sauerland, Siegerland)",
   "Damwild",
   "Schwarzwild",
   "Feldhase, Fuchs, Dachs",
   "Fasan, Stockente, Ringeltaube",
   "Waschbär, Marderhund"
  ],
  "hinweise": [
   "Das Landesjagdgesetz NRW hat eine eigene Liste jagdbarer Arten; einzelne Arten sind dort nicht mehr bejagbar.",
   "Die Jagdzeitenverordnung NRW weicht teils von den Bundeszeiten ab."
  ]
 },
 "Rheinland-Pfalz": {
  "wild": [
   "Rehwild",
   "Rotwild (Pfälzerwald, Hunsrück, Eifel)",
   "Damwild",
   "Schwarzwild",
   "Muffelwild",
   "Feldhase, Fuchs, Dachs",
   "Waschbär, Marderhund"
  ],
  "hinweise": [
   "Rotwild nur in ausgewiesenen Bewirtschaftungsbezirken.",
   "Landesjagdgesetz und Landesjagdverordnung enthalten eigene Zeiten und Abschussvorgaben."
  ]
 },
 "Saarland": {
  "wild": [
   "Rehwild",
   "Schwarzwild",
   "Rotwild (selten)",
   "Damwild",
   "Feldhase, Fuchs, Dachs",
   "Fasan, Ringeltaube",
   "Waschbär"
  ],
  "hinweise": [
   "Kleinstes Flächenland; Reviere meist überschaubar.",
   "Jagdzeiten laut saarländischer Jagdzeitenverordnung prüfen."
  ]
 },
 "Sachsen": {
  "wild": [
   "Rehwild",
   "Rotwild",
   "Damwild",
   "Schwarzwild",
   "Muffelwild",
   "Feldhase, Fuchs, Dachs",
   "Waschbär, Marderhund",
   "Wolf (nicht bejagbar, streng geschützt)"
  ],
  "hinweise": [
   "Schalenwild nach dem Sächsischen Jagdgesetz; Rotwild nur in Rotwildgebieten.",
   "Wolf unterliegt strengem Artenschutz.",
   "ASP-Sperrzonen können Auflagen für die Jagd auslösen."
  ]
 },
 "Sachsen-Anhalt": {
  "wild": [
   "Rehwild",
   "Rotwild",
   "Damwild",
   "Schwarzwild",
   "Muffelwild",
   "Feldhase, Fuchs, Dachs",
   "Waschbär, Marderhund",
   "Fasan, Stockente"
  ],
  "hinweise": [
   "Hohe Schalenwilddichte; Abschussplanung ist wichtig.",
   "Das Landesjagdgesetz definiert Wildarten, Schonzeiten und Ausnahmen eigenständig."
  ]
 },
 "Schleswig-Holstein": {
  "wild": [
   "Rehwild",
   "Damwild",
   "Rotwild",
   "Schwarzwild",
   "Feldhase, Fuchs, Dachs",
   "Wildgänse und Enten (Küste)",
   "Seehund (nur Schutzvorschriften beachten)"
  ],
  "hinweise": [
   "Das Landesjagdgesetz weicht in einigen Jagdzeiten von Bundeszeiten ab.",
   "In Schutzgebieten (Wattenmeer) gelten besondere Einschränkungen und Verbote."
  ]
 },
 "Thüringen": {
  "wild": [
   "Rehwild",
   "Rotwild",
   "Damwild",
   "Schwarzwild",
   "Muffelwild",
   "Feldhase, Fuchs, Dachs",
   "Waschbär, Marderhund",
   "Federwild wie Fasan, Stockente"
  ],
  "hinweise": [
   "Das Thüringer Jagdgesetz und die Jagdzeitenverordnung regeln Wildarten und Zeiten eigenständig.",
   "Rotwild nur in definierten Rotwildgebieten."
  ]
 }
};
const sel=document.getElementById('stateSelect'),gsel=document.getElementById('globalState');Object.keys(profiles).forEach(n=>gsel.add(new Option(n,n)));const saved=localStorage.getItem('jagdState');if(saved&&profiles[saved])gsel.value=saved;sel.value=gsel.value;function setState(n){sel.value=n;gsel.value=n;try{localStorage.setItem('jagdState',n)}catch(e){}showState()}gsel.addEventListener('change',()=>setState(gsel.value));function showState(){const p=profiles[sel.value];document.getElementById('stateTitle').textContent=sel.value;document.getElementById('stateDesc').textContent=p[2];document.getElementById('statePills').innerHTML='<span class="pill">'+p[0]+'</span><span class="pill">'+p[1]+'</span>';document.getElementById('stateFocus').textContent=p[3];const a=document.getElementById('stateLink');a.href=p[4];a.textContent='Amtliches Landesrecht öffnen ↗';document.getElementById('heroState').textContent='Angepasst für: '+sel.value;document.querySelectorAll('.cur-state').forEach(e=>e.textContent=sel.value);document.getElementById('zeitenIntro').textContent=p[0]+' – '+p[3];const z=document.getElementById('zeitenLink');z.href=p[4];z.textContent='Jagdzeiten '+sel.value+' im amtlichen Landesrecht prüfen ↗';const d=huntInfo[sel.value]||{};document.getElementById('stateGame').innerHTML=(d.wild||[]).map(w=>'<li>'+w+'</li>').join('');const li=a=>(a||[]).map(w=>'<li>'+w+'</li>').join('');document.getElementById('zeitenGame').innerHTML=li(d.wild);document.getElementById('zeitenNotes').innerHTML=li(d.hinweise);document.getElementById('stateNotes').innerHTML=(d.hinweise||[]).map(w=>'<li>'+w+'</li>').join('')}sel.addEventListener('change',()=>setState(sel.value));showState();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');if(e.target.matches('[data-count]'))countUp(e.target);observer.unobserve(e.target)}}),{threshold:.18});document.querySelectorAll('.reveal,.stat strong[data-count]').forEach(el=>observer.observe(el));function countUp(el){const target=Number(el.dataset.count),duration=850,start=performance.now();function step(now){const p=Math.min((now-start)/duration,1);el.textContent=Math.round(target*(1-Math.pow(1-p,3))).toLocaleString('de-DE');if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
document.getElementById('themeBtn').addEventListener('click',()=>{document.documentElement.classList.toggle('force-dark');const dark=document.documentElement.classList.contains('force-dark');document.documentElement.style.colorScheme=dark?'dark':'light';document.getElementById('themeBtn').textContent=dark?'☼ Helles Design':'◐ Dunkles Design'});