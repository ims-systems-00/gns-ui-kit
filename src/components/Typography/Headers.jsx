const Headers = (props) => {

  return (
    <>
      <h1>H1. this a GNS Headline </h1>
      <h2>H2. this a GNS Headline </h2>
      <h3>H3. this a GNS Headline </h3>
      <h4>H4. this a GNS Headline </h4>
      <h5>H5. this a GNS Headline </h5>
      <h6>H6. this a GNS Headline </h6>
    </>
  );
};
export default Headers;
Headers.parameters = {
  docs: {
    description: {
      story: `
It is recommended to use the only 4 tags (h1-h4) how it's shown in the examples. Ignore other (h4-h6) tags whilst you are builing the UI.
`,
    },
  },
};
