
export const setCurrentGeneratedRevision = (revision) => ({ type:'SET_CURRENT_GENERATED_REVISION', revision });

export const setInitialRevisionData = (data) => {
  return dispatch => {
    
    let revision = {
      name: data.name,
      description: data.description,
      questions: []
    };
    
    dispatch(setCurrentGeneratedRevision(revision));
  }
};

export const mockRevision = () => {
  return dispatch => {
    let revision = {
      name: "Version 1",
      description: "This is the first version of the revision, and will contain a mix of questions for users to complete",
      questions: []
    };
  
    dispatch(setCurrentGeneratedRevision(revision));
  }
}