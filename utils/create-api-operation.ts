import type { PagedCollection } from "~/types/collection";

export default function createApiOperation<T>(endpoint: string) {
  function serialize(body: T | object): Record<string, any> {
    return JSON.parse(JSON.stringify(body));
  }

  async function collection(params?: object) {
    return await $fetch<PagedCollection<T>>(`${endpoint}`, {
      params,
    });
  }

  async function item(id: number) {
    return await $fetch<T>(`${endpoint}/${id}`);
  }

  async function post(body: T | FormData) {
    return await $fetch<T>(`${endpoint}`, {
      method: "POST",
      body: serialize(body),
    });
  }

  async function patch(body: T extends { id: number } ? T : any) {
    return await $fetch<T>(`${endpoint}/${body.id}`, {
      method: "PATCH",
      body: serialize(body),
    });
  }

  async function put(body: T extends { id: number } ? T : any) {
    return await $fetch<T>(`${endpoint}/${body.id}`, {
      method: "PUT",
      body: serialize(body),
    });
  }

  async function remove(id: number) {
    return await $fetch<T>(`${endpoint}/${id}`, {
      method: "DELETE",
    });
  }

  return {
    collection,
    item,
    post,
    patch,
    put,
    remove,
  };
}
