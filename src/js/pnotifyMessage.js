import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/PNotifyBrightTheme.css';

export default function pnotifyMessage(type, message) {
  PNotify.closeAll();
  setTimeout(() => {
    if (type === 'error') {
      PNotify.error({
        text: message,
        hide: false,
      });
    } else if (type === 'info') {
      PNotify.info({
        text: message,
        hide: false,
      });
    }
  }, 300);
}
