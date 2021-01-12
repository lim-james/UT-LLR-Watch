const Patches = require('Patches');
const Reactive = require('Reactive');

const timeline = [
    { t: 8.12, key: 'shoesparkle' },
    { t: 9.25, key: 'shoesparkle' },
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
