import moment from "moment";

function days() {
  const start = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const end = new Date().toISOString().split("T")[0];

  return { start, end };
}

function polygon() {
  const REFERENCE_CHECKPOINT = 45500;
  const CHECKPOINTS_IN_DAY = 8;
  const CHECKPOINTS_IN_MONTH = CHECKPOINTS_IN_DAY * 30;
  const REFRENCE_DATE = moment("2023-05-09", "YYYY-MM-DD");

  const now = moment();
  const daysPast = now.diff(REFRENCE_DATE, "days") + 1;

  const latestCheckpointEst =
    REFERENCE_CHECKPOINT + Math.ceil(daysPast * CHECKPOINTS_IN_DAY);

  return {
    start: latestCheckpointEst - 8,
    end: latestCheckpointEst,
  };
}

function polkadot() {
  const REFRENCE_ERA = 876;
  const ERAS_IN_DAY = 1;
  const ERAS_IN_MONTH = ERAS_IN_DAY * 30;
  const REFRENCE_DATE = moment("2022-10-26", "YYYY-MM-DD");

  const now = moment();
  const daysPast = now.diff(REFRENCE_DATE, "days") + 1;
  const latestEraEst = REFRENCE_ERA + Math.ceil(daysPast * ERAS_IN_DAY);
  const era30DaysAgoEst = latestEraEst - ERAS_IN_MONTH;

  return {
    start: era30DaysAgoEst,
    end: latestEraEst,
  };
}

function solana() {
  const REFRENCE_EPOCH = 363;
  const EPOCHS_IN_DAY = 0.35;
  const EPOCHS_IN_MONTH = Math.ceil(EPOCHS_IN_DAY * 30);
  const REFRENCE_DATE = moment("2022-10-25", "YYYY-MM-DD");

  const now = moment();
  const daysPast = now.diff(REFRENCE_DATE, "days") + 1;
  const latestEpochEst = REFRENCE_EPOCH + Math.ceil(daysPast * EPOCHS_IN_DAY);
  const epoch30DaysAgoEst = latestEpochEst - EPOCHS_IN_MONTH;

  return {
    start: epoch30DaysAgoEst,
    end: latestEpochEst,
  };
}

function near() {
  const REFRENCE_BLOCK_HEIGHT = 76953090;
  const BLOCKS_IN_SEC = 1.276;
  const BLOCKS_IN_DAY = BLOCKS_IN_SEC * 60 * 60 * 25;
  const BLOCKS_IN_7_DAYS = Math.ceil(BLOCKS_IN_DAY * 7); // NEAR Epoch table only has 7 days of data
  const REFRENCE_DATE = moment("2022-10-25", "YYYY-MM-DD");

  const now = moment();
  const daysPast = now.diff(REFRENCE_DATE, "days") + 1;
  const latestBlockEst =
    REFRENCE_BLOCK_HEIGHT + Math.ceil(daysPast * BLOCKS_IN_DAY);
  const block7DaysAgoEst = latestBlockEst - BLOCKS_IN_7_DAYS;

  const start = block7DaysAgoEst - Math.ceil(100 * BLOCKS_IN_DAY); // With a Margin of 100 days worth of blocks prior to 7 days ago
  const end = latestBlockEst + Math.ceil(100 * BLOCKS_IN_DAY); // Add a Margin of 100 days worth of blocks into the future

  // To query by date range
  // const start = moment().subtract(7, "days").format("YYYY-MM-DD");
  // const end = moment().add(1, "days").format("YYYY-MM-DD");

  return {
    start,
    end,
  };
}

export { days, polygon, polkadot, solana, near };
