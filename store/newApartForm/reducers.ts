import { DECREASE, FORM_ADDRESS, FORM_GROUP_OBJECT, FORM_GROUP_VALUE, FORM_VALUE, INCREASE } from '@store/constants';
import { TPlaceType } from '@utils/types';

export type State = {
  activeStep: number;
  formValues: {
    placeType?: TPlaceType;
  };
};

export type Action =
  | { type: 'INCREASE' }
  | { type: 'DECREASE' }
  | {
      type: 'FORM_GROUP_VALUE';
      name: string;
      groupName: string;
      fieldValue: any;
    }
  | {
      type: 'FORM_GROUP_OBJECT';
      groupName: string;
      groupObject: {};
    }
  | { type: 'FORM_ADDRESS'; address: unknown }
  | { type: 'FORM_VALUE'; name: string; fieldValue: any }
  | { type: 'form-error'; name: string; error: string };

const initialState = {
  activeStep: 0,
  formValues: { placeType: { value: 'entire-place' } },
};

export const newApart = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case DECREASE:
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };

    case FORM_VALUE: {
      const { name, fieldValue } = action;

      return {
        ...state,
        formValues: {
          ...state.formValues,
          [name]: {
            ...state.formValues[name],
            value: fieldValue,
          },
        },
      };
    }

    case FORM_GROUP_VALUE: {
      const { name, groupName, fieldValue } = action;
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [groupName]: {
            ...state.formValues[groupName],
            [name]: {
              value: fieldValue,
            },
          },
        },
      };
    }

    case FORM_GROUP_OBJECT: {
      const { groupName, groupObject } = action;
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [groupName]: groupObject,
        },
      };
    }

    case FORM_ADDRESS: {
      const { address } = action;
      return {
        ...state,
        formValues: {
          ...state.formValues,
          address,
        },
      };
    }

    case 'form-error':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error,
          },
        },
      };

    default:
      return state;
  }
};
