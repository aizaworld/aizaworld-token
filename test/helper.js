const BN = web3.utils.BN;
require("chai")
    .use(require("chai-as-promised"))
    .use(require("chai-bn")(BN))
    .should();

function assertEqual(val1, val2, errorStr) {
    assert(new BN(val1).should.be.a.bignumber.that.equals(new BN(val2)), errorStr);
}

module.exports.assertEqual = assertEqual;
