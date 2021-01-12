const Patches = require('Patches');
const Reactive = require('Reactive');

const timeline = [
    // shoe sparkle - loop
    { t: 8.12, key: 'shoesparkle' },
    { t: 9.25, key: 'shoesparkle' },
    // annkle sparkle - once
    { t: 9.55, key: 'anklesparkle' },
    // { t: 10.64, key: 'anklesparkle' },
    // body double - once
    { t: 16.10, key: 'bodydouble' },
    // { t: 17.16, key: 'bodydouble' },
    // sunglass flower - loop
    { t: 12.20, key: 'sunglassflower' },
    { t: 22.30, key: 'sunglassflower' },
    // hips left - once
    { t: 25.06, key: 'hipsleft' },
    // hips right - once
    { t: 26.70, key: 'hipsright' },
    // bodylines - once
    { t: 30.70, key: 'bodylines' },
    // bodylines 2 - once
    { t: 34.17, key: 'bodylines2' },
    // heart - once
    { t: 44.65, key: 'heart' },
    // heart - once
    { t: 45.60, key: 'heart' },
    // fan - once
    { t: 50.30, key: 'fan' },
    // wink - once
    { t: 55.25, key: 'wink' },
    // turn left - once
    { t: 57.00, key: 'turn left' },
    // turn right - right
    { t: 58.50, key: 'turn right' },
    // groovy - loop
    { t: 60.23, key: 'groovy' },
    { t: 67.00, key: 'groovy' },
    // disco ball - loop
    { t: 77.80, key: 'discoball' },
    { t: 90.90, key: 'discoball' },
    // disco ball - loop
    { t: 77.80, key: 'discoball' },
    { t: 90.90, key: 'discoball' },
];

var index = 0;

Patches.outputs.getScalar('et').then(patch => {
    patch.monitor().subscribe(event => {
        const et = event.newValue;
        while (et >= timeline[index].t)  {
            Patches.inputs.setPulse(timeline[index].key, Reactive.once());
            ++index;
        }
    });
});
