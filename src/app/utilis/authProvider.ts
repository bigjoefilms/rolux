import { AuthProvider } from '@arcana/auth'

export const auth = new AuthProvider(
    "xar_dev_e69388ef7f3794cc25803164fe307e90720f6695", // App client ID
    { 
      position: 'left',
      theme: 'light',
      alwaysVisible: false,
      setWindowProvider: true,
      connectOptions: {
        compact: true
      },
      chainConfig: {
        chainId: '80001',
        rpcUrl: 'https://rpc.ankr.com/polygon_mumbai',
      },
    }
  );
  
  async function initializeAuth() {
    try {
      await auth.init();
      // Auth initialization successful, proceed with other logic
    } catch (e) {
      // Handle exception case
      console.error('Auth initialization failed:', e);
    }
  }
  
  // Call the async function to initialize auth
  initializeAuth();