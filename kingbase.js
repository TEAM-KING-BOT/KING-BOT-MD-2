require('../Kingbotmd')

  const _kingbot = require('./startKingbot')
  const kinggit = require('../Kingbotmd')
  
async function kingbotbase() {
     await qrgenerate.qr_gen();
     await kingbase.basetype();
}

qrGenerate();

_kingbot.Base().catch(() => { _kingbot.Base() });

if (vars.isHEROKU == 'YES') { //will be created soon
//created by MR.TIMA
