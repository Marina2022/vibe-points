'use server'

interface RequestBody {
  title: string
  first_name: string
  last_name: string
  pat_name?: string
  login?: string
  id?: string
  phone: string
  email: string
  city: string
  comment?: string
  telegram?: string
}

export const sendToB24 = async (body: RequestBody) => {

  try {
    const res = await fetch(`${process.env.API_URL}/b24lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => null);

    //console.log("B24 response:", data);

    if (!res.ok) {
      const errorMessage =
        data?.detail ||
        data?.message ||
        `Не удалось отправить данные по заявке - ${res.status}`;

      console.log(errorMessage, data);

      return {
        error: errorMessage,
        errorStatus: res.status,
      };
    }

    return data;
  } catch (err) {
    console.error("Ошибка sendToB24:", err);

    return {
      error: err instanceof Error ? err.message : "Неизвестная ошибка",
    };
  }
};