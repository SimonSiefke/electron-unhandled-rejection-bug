const handleUnhandledRejection = (reason) => {
  console.error(`Unhandled Rejection: ${reason.stack}`);
};

const main = async () => {
  process.on("unhandledRejection", handleUnhandledRejection);
  throw new Error("oops");
};

main();
