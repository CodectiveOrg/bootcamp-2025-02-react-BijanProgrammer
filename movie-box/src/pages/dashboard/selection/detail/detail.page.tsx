import { ReactElement } from "react";

import { useParams } from "react-router";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { fetchSelectionFindOneApi } from "../../../../api/fetch-selection-find-one.api.ts";
import { fetchSelectionMovieRemoveApi } from "../../../../api/fetch-selection-movie-remove.api.ts";

import LoadingComponent from "../../../../components/loading/loading.component.tsx";
import MovieListItemComponent from "../../../../components/movie-list-item/movie-list-item.component.tsx";

import MingcuteDelete2Line from "../../../../icons/MingcuteDelete2Line.tsx";

import { MovieListItemType } from "../../../../types/movie-list-item.type.ts";

import styles from "./detail.module.css";

export default function DetailPage(): ReactElement {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const {
    data: selection,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["selection", id],
    queryFn: () => fetchSelectionFindOneApi(id),
  });

  const mutation = useMutation({
    mutationFn: fetchSelectionMovieRemoveApi,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["selection", id],
      }),
  });

  const actionClickHandler = (movie: MovieListItemType): void => {
    mutation.mutate(
      { id: id!, dto: { movieId: movie.id } },
      {
        onSuccess: (result) => {
          if ("error" in result) {
            toast.error(result.message);
          } else {
            toast.success(result.message);
          }
        },
      },
    );
  };

  if (isPending) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <>Something went wrong!</>;
  }

  return (
    <div className={styles.detail}>
      <h1>{selection?.name}</h1>
      <p className={styles.description}>{selection?.description}</p>
      <ul className={styles.movies}>
        {selection?.movies.map((movie) => (
          <MovieListItemComponent
            key={movie.id}
            movie={movie}
            actionIcon={<MingcuteDelete2Line />}
            actionColor="danger"
            onActionClick={actionClickHandler}
          />
        ))}
      </ul>
    </div>
  );
}
