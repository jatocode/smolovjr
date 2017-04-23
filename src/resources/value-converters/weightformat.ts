export class WeightFormatValueConverter {
  toView(value) {;
    return Math.ceil(10*value/5)*5/10;
  }

  fromView(value) {

  }
}
