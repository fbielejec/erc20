import { RedspotUserConfig } from "redspot/types";
import "@redspot/patract";
import "@redspot/chai";
import "@redspot/gas-reporter";
import "@redspot/known-types";
import "@redspot/watcher";
import "@redspot/explorer";
import "@redspot/decimals";
import "dotenv/config"; // Store environment-specific variable from '.env' to process.env

// console.log(process.env.SMARTNET_MNEMONIC)

export default {
  defaultNetwork: "development",
  contract: {
    ink: {
      docker: false,
      toolchain: "nightly",
      sources: ["contracts/**/*"],
    },
  },
  networks: {
    smartnet: {
      endpoint: "wss://ws-smartnet.test.azero.dev",
      gasLimit: "1048576",
      accounts: [process.env.SMARTNET_MNEMONIC],
      types: {},
    },
  },
} as RedspotUserConfig;
