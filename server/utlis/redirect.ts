import { useRouter } from 'vue-router'
import { useToastStore } from '~/store/toasts';

const toast = useToastStore()
const router = useRouter()

const redirect = (routerLink: string, message: string) => {
  toast.message.value = message;
  toast.show.value = true;
  setTimeout(() => {
    toast.show.value = false;
  }, 2500);
  router.push(routerLink)
}

export default { redirect }
