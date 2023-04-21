export default function cleanUp(data: Record<string, any>) {
  return {
    data: data?.data?.data?.finalResult,
  };
}
