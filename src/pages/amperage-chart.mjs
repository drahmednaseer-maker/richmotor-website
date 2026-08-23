import { icon, pageHero, ctaBand, contactSection, crumbSchema } from '../layout.mjs';

const crumbs = [{ label: 'Tools', href: '/amperage-chart/' }, { label: 'Amperage Chart' }];

export const meta = {
  path: '/amperage-chart/',
  title: 'Generator Amperage Chart | kVA to Amps Guide UAE',
  description: 'Use this generator amperage chart from Rich Motor Company to find output amps by kVA, kW and voltage, and choose the right generator for your load.',
  priority: 0.8
};

export const schema = [crumbSchema('/amperage-chart/', crumbs)];

const headers = ['kVA', 'kW', '208V', '220V', '240V', '380V', '400V', '440V', '450V', '480V', '600V', '2400V', '3300V', '4160V'];

const rows = [["8","6.3","17.5","16.5","15.2","9.6","9.1","8.3","8.1","7.6","6.1","","",""],["9.4","7.5","26.1","24.7","22.6","14.3","13.6","12.3","12","11.3","9.1","","",""],["12.5","10","34.7","33","30.1","19.2","18.2","16.6","16.2","15.1","12","","",""],["18.7","15","52","49.5","45","28.8","27.3","24.9","24.4","22.5","18","","",""],["25","20","69.5","66","60.2","38.4","36.4","33.2","32.4","30.1","24","6","4.4","3.5"],["31.3","25","87","82.5","75.5","48","45.5","41.5","40.5","37.8","30","7.5","5.5","4.4"],["37.5","30","104","99","90.3","57.6","54.6","49.8","48.7","45.2","36","9.1","6.6","5.2"],["50","40","139","132","120","77","73","66.5","65","60","48","12.1","8.8","7"],["62.5","50","173","165","152","96","91","83","81","76","61","15.1","1.9","8.7"],["75","60","208","198","181","115","109","99.6","97.5","91","72","18.1","13.1","10.5"],["93.8","75","261","247","226","143","136","123","120","113","90","22.6","16.4","13"],["100","80","278","264","240","154","146","133","130","120","96","24.1","17.6","13.9"],["125","100","347","330","301","192","182","166","162","150","120","30","218","17.5"],["156","125","433","413","375","240","228","208","204","188","150","38","27.3","22"],["187","150","520","495","450","288","273","249","244","225","180","45","33","26"],["219","175","608","577","527","335","318","289","283","264","211","53","38","31"],["250","200","694","660","601","384","364","332","324","301","241","60","44","35"],["312","250","866","825","751","480","455","415","405","376","300","75","55","43"],["375","300","1040","990","903","576","546","498","487","451","361","90","66","52"],["438","350","1220","1155","1053","672","637","581","568","527","422","105","77","61"],["500","400","1390","1320","1203","770","730","665","650","602","481","120","88","69"],["625","500","1735","1650","1504","960","910","830","810","752","602","150","109","87"],["750","600","2080","1980","1803","1150","1090","996","975","902","721","180","131","104"],["875","700","2430","2310","2104","1344","1274","1162","1136","1052","842","210","153","121"],["1000","800","2780","2640","2405","1540","1460","1330","1300","1203","962","241","176","139"],["1125","900","3120","2970","2709","1730","1640","1495","1460","1354","1082","271","197","156"],["1250","1000","3470","3300","3009","1920","1820","1660","1620","1504","1202","301","218","174"],["1563","1250","4350","4130","3765","2400","2280","2080","2040","1885","1503","376","273","218"],["1875","1500","5205","4950","4520","2880","2730","2490","2440","2260","1805","452","327","261"],["2188","1750","","","5280","3350","3180","2890","3830","2640","2106","528","380","304"],["2500","2000","","","6020","3840","3640","3320","3240","3015","2405","602","436","348"],["2812","2250","","","6780","4320","4095","3735","3645","3400","2710","678","491","392"],["3130","2500","","","7520","4800","4560","4160","4080","3765","3005","752","546","435"]];

export const body = `
${pageHero({
  eyebrow: 'Amperage chart',
  title: 'kVA / kW amperage chart',
  text: 'Estimate the output amperage of a generator from its operating power and voltage — across single and three-phase configurations from 8 kVA to 3130 kVA.',
  crumbs,
  actions: [{ href: '/docs/amperage-chart.pdf', label: 'Download PDF' }, { href: '/sizing-a-generator/', label: 'How to size a generator' }]
})}

<section class="section">
  <div class="container">
    <div class="callout" style="margin-bottom:2rem" data-reveal>
      <p>This chart estimates the output amperage of a generator based on the operating power and voltage. Please note that this table is intended as an <strong>estimate</strong> of how many amps a generator outputs during operation, and is not an exact representation — various factors can increase or decrease this value.</p>
    </div>

    <div class="table-wrap" data-reveal>
      <table>
        <caption class="sr-only">Generator amperage by kVA, kW and operating voltage</caption>
        <thead><tr>${headers.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
        <tbody>
          ${rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c || '&mdash;'}</td>`)).join('')}</tr>`).join('\n          ')}
        </tbody>
      </table>
    </div>
    <p class="table-note" data-reveal>Scroll the table horizontally to see all voltage columns. Values assume a 0.8 power factor unless otherwise specified.</p>

    <div class="btn-row" style="margin-top:2rem" data-reveal>
      <a class="btn btn--dark" href="/docs/amperage-chart.pdf" target="_blank" rel="noopener">${icon.download}Download the PDF chart</a>
      <a class="btn btn--ghost" href="/contact-us/">Ask an engineer</a>
    </div>
  </div>
</section>

<section class="section section--mist deferred">
  <div class="container">
    <div class="section-head" data-reveal>
      <span class="eyebrow">Reading the chart</span>
      <h2 class="h-1">How to use it</h2>
    </div>
    <ol class="steps" data-reveal>
      <li><b>Find your generator rating</b>Locate the kVA (or kW) row that matches the generator you are specifying or already own.</li>
      <li><b>Read across to your voltage</b>Follow the row across to the column for the operating voltage at your site — 400V and 415V systems are common in the UAE.</li>
      <li><b>Compare against your load</b>The figure is the approximate full-load current. Compare it against your connected load and breaker rating.</li>
      <li><b>Allow for motor starting</b>Motors can demand two to three times their running current at start-up. Size the set for the starting condition, not just the running load.</li>
    </ol>
    <div class="btn-row" style="margin-top:2.5rem" data-reveal>
      <a class="btn btn--primary" href="/sizing-a-generator/">Full generator sizing guide${icon.arrow}</a>
      <a class="btn btn--ghost" href="/voltage-configuration/">Voltage configuration</a>
    </div>
  </div>
</section>

${ctaBand({ title: 'Not sure which rating you need?', text: 'Send us your load schedule and we will calculate the correct kVA, breaker size and cable requirement.' })}
${contactSection()}
`;
