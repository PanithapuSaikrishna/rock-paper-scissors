function importAll(r: any) {
  return r.keys().map(r);
}

export default {
  importFiles: () => {
    return importAll(
      require.context("../assets/gameImages", false, /\.(png)$/)
    );
  },
};
