// store/currentPage.ts
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useCurrentPage = () => {
  const selected: Ref<string> = ref('/');
  const router = useRouter();

  const chooseCurrentPage = (name: string) => {
    selected.value = name;
    if (router) {
      router.push(name);
    } else {
      console.error("Router is not defined");
    }
  };

  return {
    selected,
    chooseCurrentPage
  };
};