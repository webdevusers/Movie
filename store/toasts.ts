export const useToastStore = () => {
  const message: Ref<string> = ref('');
  const show: Ref<boolean> = ref(false);
  const worktime: Ref<Number> = ref(3500);
  const description: Ref<string> = ref('')

  return {
    message,
    show,
    worktime,
    description
  }
}