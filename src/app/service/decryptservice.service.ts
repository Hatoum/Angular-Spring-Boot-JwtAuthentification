import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class DecryptserviceService {

  constructor() { }

 //The get method is use for decrypt the value.
 decrypter(keys, value) {
  const key = CryptoJS.enc.Utf8.parse(keys);
  const iv = CryptoJS.enc.Utf8.parse(keys);
  const decrypted = CryptoJS.AES.decrypt(value, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}
}