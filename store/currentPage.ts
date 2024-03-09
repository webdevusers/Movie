// store/currentPage.ts
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useToastStore } from './toasts';

const toast = useToastStore()

export const useCurrentPage = () => {
  const selected: Ref<string> = ref('/');
  const router = useRouter();

  const chooseCurrentPage = (name: string, message:string) => {
    selected.value = name;

    toast.message.value = message;
    toast.show.value = true;

    router.push(name);

    setTimeout(() => {
      toast.show.value = false;
    }, 2500);
  };

  return {
    selected,
    chooseCurrentPage
  };
};