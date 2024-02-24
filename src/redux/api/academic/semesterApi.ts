import { tagTypes } from "@/redux/tag-types";
import { baseApi } from "../baseApi";
import { IAcademicSemester, IMeta } from "@/types";

const ACADEMIC_SEMESTER_URL = "/academic-semesters";
export const academicSemesterAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create academic semester endpoint
    addAcademicSemester: build.mutation({
      query: (data) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),

    // get all academic semester endpoint
    academicSemesters: build.query({
      query: (arg) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAcademicSemester[], meta: IMeta) => {
        return {
          academicSemesters: response,
          meta,
        };
      },
      providesTags: [tagTypes.academicSemester],
    }),
    // get single academic semester endpoint
    academicSemester: build.query({
      query: (id) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.academicSemester],
    }),
    // update academic semester endpoint
    updateAcademicSemester: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
    // delete academic semester endpoint
    deleteAcademicSemester: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.academicSemester],
    }),
  }),
});

export const {
  useAddAcademicSemesterMutation,
  useAcademicSemestersQuery,
  useAcademicSemesterQuery,
  useUpdateAcademicSemesterMutation,
  useDeleteAcademicSemesterMutation,
} = academicSemesterAPi;
