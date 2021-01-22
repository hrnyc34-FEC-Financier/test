const characteristicsMap = [
  [
    'Size',
    [
      'A size too small',
      '1/2 a size too small',
      'Perfect',
      '1/2 a size too big',
      'A size too wide',
    ],
  ],
  [
    'Width',
    [
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide',
    ],
  ],
  [
    'Comfort',
    [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect',
    ],
  ],
  [
    'Quality',
    [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect',
    ],
  ],
  [
    'Length',
    [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long',
    ],
  ],
  [
    'Fit',
    [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long',
    ],
  ],
];

const createCharacteristicsArray = (productCharacteristics) => {
  const characteristicsArray = [];
  for (let i = 0; i < characteristicsMap.length; i++) {
    const characteristic = characteristicsMap[i][0];
    const characteristicInfo = characteristicsMap[i][1];
    //will handle cases where a product's characteristic property is set to null
    if (productCharacteristics.hasOwnProperty(characteristic) && productCharacteristics[characteristic].value !== null) {
      const characteristicValue = Number(productCharacteristics[characteristic].value.slice(0, 3));
      characteristicsArray.push({ characteristic: [characteristic, characteristicValue], characteristicInfo });
    }
  }
  return characteristicsArray;
};

export { characteristicsMap, createCharacteristicsArray };