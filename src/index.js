module.exports = function check(str, bracketsConfig) {
  let sb = '';
  let snew='';
  while ((str!='') && (snew != str)) {
    snew = str;
    for (let i = 0; i < bracketsConfig.length; i++) {
      sb = bracketsConfig[i][0]+bracketsConfig[i][1];
      str = str.replace(sb,'');
      sb = '';
    }
  }
  if (str.length == '') {return true;}
  else {return false;}
}
