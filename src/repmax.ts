import { observable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Repmax {
    @observable sweight = 100;
    @observable bweight = 120;
    @observable dweight = 140;

    public ea: EventAggregator;

    constructor(EventAggregator) {
        this.ea = EventAggregator;
    }

    attached() {
        this.loadConfig();
        this.inform();
    }

    sweightChanged(newValue, oldValue) {
        if (oldValue == undefined) {
            return;
        }
        this.inform();
    }

    bweightChanged(newValue, oldValue) {
        if (oldValue == undefined) {
            return;
        }
        this.inform();
    }

    dweightChanged(newValue, oldValue) {
        if (oldValue == undefined) {
            return;
        }
        this.inform();
    }

    inform() {
        this.saveConfig();
        this.ea.publish('weights', {
            dweight: Number(this.dweight),
            bweight: Number(this.bweight),
            sweight: Number(this.sweight)
        });
    }

    saveConfig() {
        let config = {
            sweight: this.sweight,
            bweight: this.bweight,
            dweight: this.dweight,
        }
        localStorage.setItem('repmax', JSON.stringify(config));
    }

    loadConfig() {
        let config = JSON.parse(localStorage.getItem('repmax'));
        if (config != null) {
            this.sweight = config.sweight;
            this.bweight = config.bweight;
            this.dweight = config.dweight;
        }
    }
}