# erc20_template

## setup
Create .env file in the root directory with the mnemonic of your account key on the smartnet network:

```
SMARTNET_MNEMONIC="<seed phrase>"
```

## compile contract
```bash
cargo contract build --release
```

## deploy contract

```bash
npx redspot run scripts/deploy.ts --network smartnet --no-compile
```
