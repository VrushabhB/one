onst[(userInfo, setUserInfo, removeUserInfo)] = useLocalStorage(
  key,
  intialValue
);

const useLocalStorage = (key, intialValue) => {
  const [userInfo, setState] = useState(intialValue);

  const checkForKey = () => {
    return localStorage.getItem(key);
  };
  const setUserInfo = (userInfo) => {
    if (!checkForKey()) {
      localStorage.setItem(key, JSON.stringify(userInfo));
    }
  };
  const removeUserInfo = () => {
    if (checkForKey()) {
      localStorage.remove;
    }
  };

  useEffect(() => {
    setState(intialValue);
    setUserInfo(intialValue);

    return () => {
      //to ckler the state
      removeUserInfo();
    };
  }, [key, checkForKey]);

  return [userInfo, setUserInfo, removeUserInfo];
};
