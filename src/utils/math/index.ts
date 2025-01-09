import moment from 'moment';
import { CURRENCY_JPY, CURRENCY_VND, CURRENCY_VND_FORMAT } from 'utils/constant';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isNumber = (num: any): boolean => {
  return !Number.isNaN(parseFloat(String(num)));
};
export const tryParseNumber = (num: any): any => {
  if (isNumber(num)) {
    return parseFloat(String(num));
  }
  return num;
};

export const roundMaxFixed = (num: number, decimals: number): number => {
  const number = Number(String(`${num}e${decimals}`));
  return Number(Math.round(Number(`${number}e-${decimals}`)));
};

export const formatNumber = (num: number | string, comma = ',') => {
  if (typeof num !== 'number' && typeof num !== 'string') {
    return num;
  }
  return String(num).replace(/(\d)(?=(\d{3})+\b)/g, `$1${comma}`);
};

export function formatPhone(phoneNumber: string) {
  if (phoneNumber) {
    phoneNumber = phoneNumber.replaceAll(' ', '');
    if (phoneNumber.length !== 10) {
      return phoneNumber;
    }
    const match = phoneNumber.replace(/^(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    return match;
  }
  return phoneNumber;
}

export function formatUserId(userId: string) {
  if (userId) {
    const match = `${userId.slice(0, 3)}xxx${userId.slice(-4)}`;
    return match;
  }
  return userId;
}

export function formatCurrency(currencyParam: string | Number, separator = ',', typeCurrency?: string, hideUnit?: boolean) {
  if (currencyParam !== undefined && currencyParam !== null) {
    let currency: string;
    if (
      typeof currencyParam === 'string' &&
      currencyParam.indexOf(',') < 0 &&
      typeCurrency !== CURRENCY_VND &&
      typeCurrency !== CURRENCY_JPY
    ) {
      currency = Number(currencyParam).toFixed(2);
    } else {
      currency = Number(currencyParam).toString();
    }

    let characterFirst = '';
    if (currency.charAt(0) === '-') {
      characterFirst = '-';
      currency = currency.slice(1);
    }
    const [integerPart, decimalPart] = currency.split('.');
    const formattedIntegerPart = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    let formattedCurrency = characterFirst + formattedIntegerPart;
    if (decimalPart !== undefined) {
      formattedCurrency += `.${decimalPart.padEnd(2, '0')}`;
    } else if (currencyParam && currencyParam !== 0 && typeCurrency !== CURRENCY_VND && typeCurrency !== CURRENCY_JPY) {
      formattedCurrency += '.00';
    }

    return typeCurrency && !hideUnit ? `${formattedCurrency || '0'} ${typeCurrency}` : formattedCurrency;
  }
  return '';
}

export function formatNumberAcountBankVsCCCD(numberAcountBank: string | undefined) {
  // return numberAcountBank;
  if (numberAcountBank) {
    numberAcountBank = numberAcountBank.replaceAll(' ', '');
    const chunkSize = 4;
    const content = [];
    for (let i = 0; i < numberAcountBank?.length; i += chunkSize) {
      const chunk = numberAcountBank.slice(i, i + chunkSize);
      content.push(chunk);
    }
    return content.join(' ');
  }
  return numberAcountBank;
}

export function validatePhoneNumber(number: string) {
  return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}

export function formatBigNumber(xP: any) {
  let x = xP;
  if (Math.abs(x) < 1.0) {
    const e = parseInt(x.toString().split('e-')[1], 10);
    if (e) {
      x *= 10 ** (e - 1);
      // x = '0.' + new Array(e).join('0') + x.toString().substring(2);
      x = `0.${new Array(e).join('0')}${x.toString().substring(2)}`;
    }
  } else {
    let e = parseInt(x.toString().split('+')[1], 10);
    if (e > 20) {
      e -= 20;
      x /= 10 ** e;
      x += new Array(e + 1).join('0');
    }
  }
  return x;
}

export function formatExpDateCard(date: any) {
  if (date) {
    return moment(date, 'YYYYMM').format('MM/YYYY');
  }
  return '';
}

export function formatIssueDateCard(date: any) {
  // console.log('date', date);
  if (date) {
    return moment(date, 'DDMMYYYY').format('DD/MM/YYYY');
  }
  return '';
}

export function formatOpenDateAccount(date: any) {
  // console.log('date', date);
  if (date) {
    return moment(date, 'YYYYMMDD').format('DD/MM/YYYY');
  }
  return '';
}

export function getCurrencyLabel(curentCode: string) {
  if (curentCode === CURRENCY_VND) {
    return CURRENCY_VND_FORMAT;
  }
  return curentCode ?? '';
}

export function formatCreditAccountName(param: string) {
  if (!param) {
    return '';
  }
  const arr = param.split(' ');
  if (arr.length === 1 || arr.length === 2) {
    return param;
  }
  const username = `${arr?.[arr.length - 2]} ${arr?.[arr.length - 1]}`;
  return username;
}

export function maskCardNumber(param: string) {
  if (!param) {
    return '';
  }
  return `${param.slice(0, 6)}**********`;
}

export const docSoTien = (SoTien: number) => {
  const ChuSo = [' không ', ' một ', ' hai ', ' ba ', ' bốn ', ' năm ', ' sáu ', ' bảy ', ' tám ', ' chín '];
  const Tien = ['', ' nghìn', ' triệu', ' tỷ', ' nghìn tỷ', ' triệu tỷ'];

  const docSo3ChuSo = function (baso: any) {
    // let tram;
    // let chuc;
    // let donvi;
    let KetQua = '';
    // @ts-ignore
    const tram = parseInt(baso / 100, 10);
    // @ts-ignore
    const chuc = parseInt((baso % 100) / 10, 10);
    const donvi = baso % 10;
    if (tram === 0 && chuc === 0 && donvi === 0) return '';
    if (tram !== 0) {
      KetQua += `${ChuSo[tram]} trăm`;
      if (chuc === 0 && donvi !== 0) KetQua += ' linh ';
    }
    if (chuc !== 0 && chuc !== 1) {
      KetQua += `${ChuSo[chuc]} mươi`;
      if (chuc === 0 && donvi !== 0) KetQua = `${KetQua} linh`;
    }
    if (chuc === 1) KetQua += ' mười ';
    switch (donvi) {
      case 1:
        if (chuc !== 0 && chuc !== 1) {
          KetQua += ' mốt ';
        } else {
          KetQua += ChuSo[donvi];
        }
        break;
      case 5:
        if (chuc === 0) {
          KetQua += ChuSo[donvi];
        } else {
          KetQua += ' lăm ';
        }
        break;
      default:
        if (donvi !== 0) {
          KetQua += ChuSo[donvi];
        }
        break;
    }
    return KetQua;
  };

  const doc = function (SoTienDoc: number) {
    let lan = 0;
    let i = 0;
    let so = 0;
    let KetQua = '';
    let tmp = '';
    let soAm = false;
    const ViTri = new Array(0);
    if (SoTienDoc < 0) soAm = true; // return "Số tiền âm !";
    if (SoTienDoc === 0) return 'Không đồng'; // "Không đồng !";
    if (SoTienDoc > 0) {
      so = SoTienDoc;
    } else {
      so = -SoTienDoc;
    }
    if (SoTienDoc > 8999999999999999) {
      // SoTien = 0;
      return ''; // "Số quá lớn!";
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if (Number.isNaN(ViTri[5])) ViTri[5] = '0';
    so -= parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
    if (Number.isNaN(ViTri[4])) ViTri[4] = '0';
    so -= parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
    if (Number.isNaN(ViTri[3])) ViTri[3] = '0';
    so -= parseFloat(ViTri[3].toString()) * 1000000000;
    // @ts-ignore
    ViTri[2] = parseInt(so / 1000000, 10);
    if (Number.isNaN(ViTri[2])) ViTri[2] = '0';
    // @ts-ignore
    ViTri[1] = parseInt((so % 1000000) / 1000, 10);
    if (Number.isNaN(ViTri[1])) ViTri[1] = '0';
    // @ts-ignore
    ViTri[0] = parseInt(so % 1000, 10);
    if (Number.isNaN(ViTri[0])) ViTri[0] = '0';
    if (ViTri[5] > 0) {
      lan = 5;
    } else if (ViTri[4] > 0) {
      lan = 4;
    } else if (ViTri[3] > 0) {
      lan = 3;
    } else if (ViTri[2] > 0) {
      lan = 2;
    } else if (ViTri[1] > 0) {
      lan = 1;
    } else {
      lan = 0;
    }
    for (i = lan; i >= 0; i -= 1) {
      tmp = docSo3ChuSo(ViTri[i]);
      KetQua += tmp;
      if (ViTri[i] > 0) KetQua += Tien[i];
      if (i > 0 && tmp.length > 0) KetQua += ''; // ',';//&& (!string.IsNullOrEmpty(tmp))
    }
    if (KetQua.substring(KetQua.length - 1) === ',') {
      KetQua = KetQua.substring(0, KetQua.length - 1);
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
    if (soAm) {
      return `Âm ${KetQua} đồng`; // .substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
    }
    return `${KetQua} đồng`; // .substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
  };

  return doc(SoTien).replaceAll('  ', ' ');
};
