
  /**
  * Generated by @proofgeist/fmdapi package
  * https://github.com/proofgeist/fmdapi
  * DO NOT EDIT THIS FILE DIRECTLY. Changes may be overritten
  */
  import { z } from "zod";

  // @generated
  // prettier-ignore
  /* eslint-disable */
  export const ZContacts = z.object({
      "Email1": z.string(),
      "hasWebAccess": z.union([z.string(), z.number()]),
  });

  export type TContacts = z.infer<typeof ZContacts>;
