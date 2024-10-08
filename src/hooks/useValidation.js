function useValidation() {
  const validationFunc = (name, value, setObj) => {
    switch (name) {
      case 'name':
        return nameValidation(value, setObj);
      case 'description':
        return descriptionValidation(value, setObj);
      case 'price':
        return priceValidation(value, setObj);
      case 'tag':
        return tagValidation(value, setObj);
      default:
        const isOK = false;
        const errMsg = 'Invalid input name';
        setObj((prev) => {
          return { ...prev, isOK, errMsg };
        });
        return isOK;
    }
  };

  return validationFunc;

  function nameValidation(value, setObj) {
    if (value?.length <= 0) {
      const isOK = false;
      const errMsg = '1자 이상 입력해주세요';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    } else if (value?.length > 10) {
      const isOK = false;
      const errMsg = '10자 이내로 입력해주세요';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    } else {
      const isOK = true;
      const errMsg = '';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    }
  }

  function descriptionValidation(value, setObj) {
    if (value?.length <= 10) {
      const isOK = false;
      const errMsg = '10자 이상 입력해주세요';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    } else if (value?.length > 100) {
      const isOK = false;
      const errMsg = '100자 이내로 입력해주세요';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    } else {
      const isOK = true;
      const errMsg = '';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    }
  }

  function priceValidation(value, setObj) {
    const p = Number(value);
    if (!p) {
      const isOK = false;
      const errMsg = '숫자로 입력해주세요';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    } else if (p < 0) {
      const isOK = false;
      const errMsg = '양수로 입력해주세요';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    } else {
      const isOK = true;
      const errMsg = '';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    }
  }

  function tagValidation(value, setObj) {
    if (value?.length > 5) {
      const isOK = false;
      const errMsg = '5글자 이내로 입력해주세요';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    } else {
      const isOK = true;
      const errMsg = '';
      setObj((prev) => {
        return { ...prev, isOK, errMsg };
      });
      return isOK;
    }
  }
}

export default useValidation;
