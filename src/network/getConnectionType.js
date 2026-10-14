import { Network } from '@capacitor/network';

export async function getConnectionType() {
  const status = await Network.getStatus();
  return status.connected ? status.connectionType : 'none';
}
