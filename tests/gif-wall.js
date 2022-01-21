const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

describe('gif-wall', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  it('Is initialized!', async () => {
    // Add your test here.
    const program = anchor.workspace.GifWall;
    const baseAccount = anchor.web3.Keypair.generate();
    const tx = await program.rpc.initialize();
    await program.rpc.startStuffOff({
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [baseAccount],
    });
    //console.log("Your transaction signature", tx);


    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('👀 GIF Count', account.totalGifs.toString())
    });

    await program.rpc.addGif({
      accounts: {
        baseAccount: baseAccount.publicKey,
      },
    });
    
    // Get the account again to see what changed.
    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('👀 GIF Count', account.totalGifs.toString())
});


/////////////////////////////////////////////////

// const anchor = require('@project-serum/anchor');
// const { SystemProgram } = anchor.web3;

// const main = async() => {
//   console.log("🚀 Starting test...")

//   const provider = anchor.Provider.env();
//   anchor.setProvider(provider);

//   const program = anchor.workspace.Myepicproject;
//   const baseAccount = anchor.web3.Keypair.generate();
//   let tx = await program.rpc.startStuffOff({
//     accounts: {
//       baseAccount: baseAccount.publicKey,
//       user: provider.wallet.publicKey,
//       systemProgram: SystemProgram.programId,
//     },
//     signers: [baseAccount],
//   });
//   console.log("📝 Your transaction signature", tx);

//   let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
//   console.log('👀 GIF Count', account.totalGifs.toString())

//   // You'll need to now pass a GIF link to the function! You'll also need to pass in the user submitting the GIF!
//   await program.rpc.addGif("insert_a_giphy_link_here", {
//     accounts: {
//       baseAccount: baseAccount.publicKey,
//       user: provider.wallet.publicKey,
//     },
//   });
  
//   // Call the account.
//   account = await program.account.baseAccount.fetch(baseAccount.publicKey);
//   console.log('👀 GIF Count', account.totalGifs.toString())

//   // Access gif_list on the account!
//   console.log('👀 GIF List', account.gifList)
// }

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

