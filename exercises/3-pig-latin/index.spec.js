const translate = require('./index');

describe('#translate', function () {
  it('translates a word beginning with a vowel', function () {
    s = translate("apple");
    expect(s).toEqual('appleay');
  });

  it('translates a word beginning with a consonant', function () {
    s = translate("banana");
    expect(s).toEqual("ananabay");
  });

  it('translates a word beginning with two consonants', function () {
    s = translate("cherry");
    expect(s).toEqual('errychay');
  });

  it('translates two words', function () {
    s = translate("eat pie");
    expect(s).toEqual('eatay iepay');
  });

  it('translates a word beginning with three consonants', function () {
    expect(translate("three")).toEqual("eethray");
  });

  it('counts "sch" as a single phoneme', function () {
    s = translate("school");
    expect(s).toEqual("oolschay");
  });

  it('counts "qu" as a single phoneme', function () {
    s = translate("quiet");
    expect(s).toEqual("ietquay");
  });

  it('counts "qu" as a consonant even when its preceded by a consonant', function () {
    s = translate("square");
    expect(s).toEqual("aresquay");
  });

  it('translates many words', function () {
    s = translate("the quick brown fox");
    expect(s).toEqual("ethay ickquay ownbray oxfay");
  });
});
