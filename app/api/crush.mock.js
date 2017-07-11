export const getCrushesOnMe = () => {
  return {
    status: 200,
    json: () => 9,
  };
};

export const getMyCrushes = () => {
  return {
    status: 200,
    json: () => ([
      {
        crushDisplayName: "kjhsadf",
      }
    ]),
  };
};

export const postCrush = (crush) => {
  return {
    status: 200,
    json: () => 9,
  };
};
