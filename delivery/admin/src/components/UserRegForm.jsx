import React, {useRef, useState, useEffect} from 'react'

import axios from "./../api/axios";

const USER_REGEX= /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/user/signup";

const UserRegForm = () => {

    const inputStyle = "w-100 bg-red-100 px-5 py-2 items-center justify-start"

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false)

    const [email, setEmail] = useState('');

    const [contactNumber, setContactNumber] = useState('');

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      userRef.current.focus();
    }, []);

    useEffect(() => {
      const result = USER_REGEX.test(user);
      console.log(result);
      console.log(user);
      setValidName(result);
    }, [user]);
    
    useEffect(() => {
      const result = PWD_REGEX.test(pwd);
      console.log(result);
      console.log(pwd);
      setValidPwd(result);
      const match = pwd === matchPwd;
      setValidMatch(match);
    }, [pwd, matchPwd]);
    
    useEffect(() => {
      setErrMsg('');
    }, [user, pwd, matchPwd])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ name: user, password: pwd, email, contactNumber }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

  return (
    <div className='w-100 p-1 md:p-5 flex flex-col items-center justify-center'>
        <p ref={errRef} className={errMsg ? "block text-red-500" : "hidden"} aria-live="assertive">{errMsg}</p>
        <h1 className='font-bold text-3xl pb-10'>Sign Up as Customer</h1>
        <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-5">
            <div className={inputStyle}>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                  UserName: 
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="username" 
                        type="text" 
                        placeholder="Username"
                        autoComplete="off"
                        ref={userRef}
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onChange={(e) => setUser(e.target.value)}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        required 
                />
                        <p id="uidnote" className={user && user && !validName ? "block relative w-100" : "hidden"}>
                            4 to 24 characters. <br />
                            Must begin with a letter. <br />
                            Letters, number, underscores, hyphens allowed.
                        </p>
            </div>
            <div className={inputStyle}>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                   Email: 
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="email" 
                        type="email" 
                        placeholder="example@mail.com"
                        autoComplete="off"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                />
                <p>

                </p>

            </div>  

            <div className={inputStyle}>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="number">
                   Phone Number: 
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" 
                        id="number" 
                        type="number" 
                        placeholder="+243 0 00000 00"
                        autoComplete="off"
                        required
                        onChange={(e) => setContactNumber(e.target.value)}
                        />
            </div> 
            
            <div className={inputStyle}>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                        id="password" 
                        type="password" 
                        placeholder="******************"
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onChange={(e) => setPwd(e.target.value)}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "block" : "hidden"}>
                            8 to 24 characters. <br />
                            Must include uppercase and lowercase letters, a number and a special character characters. <br />
                            Allowed special characters(!, @, #, $, %).
                            
                        </p>
            </div>
            <div className={inputStyle}>
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="confirm_password">
                  Confirm Password:
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" 
                        id="confirm_password" 
                        type="password" 
                        placeholder="******************"
                        required
                        value={matchPwd}
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "hidden"}>
                            
                            Must match the first password input field.
                        </p>
            </div>
             
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" 
                        type="submit"
                        // disabled={!validName || !validPwd || !validMatch ? true : false}
                        >
                          Sign Up
                </button>

              </div>
            </form>
    </div>
  )
}

export default UserRegForm