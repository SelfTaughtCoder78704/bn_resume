(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3801:(e,a,t)=>{Promise.resolve().then(t.bind(t,1041))},1041:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>z});var s=t(7437),r=t(2265),n=t(5912),l=t(7746),i=t(6143),o=t(8296),c=t(2699),d=t(4436),m=t(5249),x=t(993),g=t(9869),p=t(2140),u=t(4086),h=t(7055),y=t(7218);let b=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:"rounded-xl border bg-card text-card-foreground shadow ".concat(t),...r})});b.displayName="Card";let f=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:"flex flex-col space-y-1.5 p-6 ".concat(t),...r})});f.displayName="CardHeader";let j=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("h3",{ref:a,className:"font-semibold leading-none tracking-tight ".concat(t),...r})});j.displayName="CardTitle",r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("p",{ref:a,className:"text-sm text-muted-foreground ".concat(t),...r})}).displayName="CardDescription";let v=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:"p-6 pt-0 ".concat(t),...r})});v.displayName="CardContent",r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:"flex items-center p-6 pt-0 ".concat(t),...r})}).displayName="CardFooter";var N=t(4841),k=t(8094),w=t(4453),C=t(5353),S=t(5211);t(7882),S.kL.register(...S.zX);let A=()=>{let[e,a]=(0,r.useState)([]),[t,n]=(0,r.useState)(""),l={help:"Available commands: help, clear, echo, status, deploy",clear:"CLEAR",echo:e=>e.join(" "),status:"All systems operational",deploy:"Deploying application...\nBuild successful\nDeployment complete"};return(0,s.jsxs)("div",{className:"bg-gray-900 rounded-lg p-4 font-mono text-sm",children:[(0,s.jsxs)("div",{className:"flex gap-2 mb-4",children:[(0,s.jsx)("div",{className:"w-3 h-3 rounded-full bg-red-500"}),(0,s.jsx)("div",{className:"w-3 h-3 rounded-full bg-yellow-500"}),(0,s.jsx)("div",{className:"w-3 h-3 rounded-full bg-green-500"})]}),(0,s.jsxs)("div",{className:"h-48 overflow-auto text-green-400",children:[e.map((e,a)=>(0,s.jsx)("div",{className:"mb-1",children:e},a)),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"text-green-500 mr-2",children:"$"}),(0,s.jsx)("input",{type:"text",value:t,onChange:e=>n(e.target.value),onKeyDown:e=>{if("Enter"===e.key){let e=t.split(" "),s=l[e[0].toLowerCase()];"CLEAR"===s?a([]):a(a=>[...a,"> ".concat(t),"function"==typeof s?s(e.slice(1)):s||"Command not found"]),n("")}},className:"bg-transparent border-none outline-none text-green-400 flex-1",placeholder:"Type 'help' for commands..."})]})]})]})},I=()=>{let[e,a]=(0,r.useState)("/api/users"),[t,n]=(0,r.useState)("GET"),[l,i]=(0,r.useState)(!1),[o,c]=(0,r.useState)(null),d={"/api/users":{GET:{users:[{id:1,name:"Alice Johnson",role:"Admin"},{id:2,name:"Bob Smith",role:"User"}]},POST:{message:"User created successfully",id:3},PUT:{message:"User updated successfully"},DELETE:{message:"User deleted successfully"}}};return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex gap-4",children:[(0,s.jsx)("select",{value:t,onChange:e=>n(e.target.value),className:"px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:["GET","POST","PUT","DELETE"].map(e=>(0,s.jsx)("option",{value:e,children:e},e))}),(0,s.jsx)("input",{value:e,onChange:e=>a(e.target.value),className:"flex-1 px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"}),(0,s.jsx)("button",{onClick:()=>{i(!0),setTimeout(()=>{c({status:200,data:d[e][t],timestamp:new Date().toISOString()}),i(!1)},1e3)},disabled:l,className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50",children:"Send Request"})]}),o&&(0,s.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-auto",children:(0,s.jsx)("code",{className:"text-sm dark:text-gray-300",children:JSON.stringify(o,null,2)})})]})},Z=()=>{let[e,a]=(0,r.useState)([{time:"12:00:00",cpu:75,memory:80,requests:50},{time:"12:00:02",cpu:78,memory:82,requests:55},{time:"12:00:04",cpu:80,memory:85,requests:60},{time:"12:00:06",cpu:77,memory:79,requests:52},{time:"12:00:08",cpu:82,memory:83,requests:58}]),[t,n]=(0,r.useState)(!0),l=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!t)return;let e=setInterval(()=>{a(e=>[...e,{time:new Date().toLocaleTimeString(),cpu:30*Math.random()+70,memory:20*Math.random()+60,requests:Math.floor(100*Math.random())}].slice(-10))},2e3);return()=>clearInterval(e)},[t]),(0,r.useEffect)(()=>{if(l.current){i.current&&i.current.destroy();let a=l.current.getContext("2d");i.current=new S.kL(a,{type:"line",data:{labels:e.map(e=>e.time),datasets:[{label:"CPU %",data:e.map(e=>e.cpu),borderColor:"#3b82f6",fill:!1},{label:"Memory %",data:e.map(e=>e.memory),borderColor:"#10b981",fill:!1},{label:"Requests/s",data:e.map(e=>e.requests),borderColor:"#8b5cf6",fill:!1}]},options:{scales:{x:{type:"category",title:{display:!0,text:"Time"}},y:{beginAtZero:!0,title:{display:!0,text:"Percentage / Requests"}}}}})}},[e]),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("h4",{className:"font-semibold dark:text-white",children:"Live Performance Metrics"}),(0,s.jsx)("button",{onClick:()=>n(!t),className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600",children:t?(0,s.jsx)(N.Z,{className:"h-4 w-4"}):(0,s.jsx)(k.Z,{className:"h-4 w-4"})})]}),(0,s.jsx)("canvas",{ref:l,className:"h-64"})," "]})},E=()=>{let[e,a]=(0,r.useState)(""),[t,n]=(0,r.useState)(0),[l,i]=(0,r.useState)([]),o=(0,r.useCallback)(e=>{let a=[{regex:/.{8,}/,message:"At least 8 characters"},{regex:/[A-Z]/,message:"Uppercase letter"},{regex:/[a-z]/,message:"Lowercase letter"},{regex:/[0-9]/,message:"Number"},{regex:/[^A-Za-z0-9]/,message:"Special character"}].map(a=>({passed:a.regex.test(e),message:a.message}));n(20*a.filter(e=>e.passed).length),i(a)},[]);return(0,r.useEffect)(()=>{o(e)},[e,o]),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:"password",value:e,onChange:e=>a(e.target.value),className:"w-full px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white",placeholder:"Enter password to test strength..."}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 h-1 transition-all duration-300",style:{width:"".concat(t,"%"),backgroundColor:"hsl(".concat(1.2*t,", 100%, 50%)")}})]}),(0,s.jsx)("div",{className:"grid grid-cols-2 gap-2",children:l.map((e,a)=>(0,s.jsxs)("div",{className:"flex items-center gap-2 text-sm ".concat(e.passed?"text-green-500":"text-gray-400"),children:[e.passed?"✓":"○"," ",e.message]},a))})]})},P=()=>{let e=[{icon:m.Z,title:"CLI Simulation",description:"Interactive command-line interface demo",component:(0,s.jsx)(A,{})},{icon:x.Z,title:"API Testing",description:"Mock REST API interaction demo",component:(0,s.jsx)(I,{})},{icon:p.Z,title:"Performance Monitoring",description:"Real-time metrics visualization",component:(0,s.jsx)(Z,{})},{icon:w.Z,title:"Security Analysis",description:"Password strength validator",component:(0,s.jsx)(E,{})}];return(0,s.jsx)("section",{children:(0,s.jsxs)(b,{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",children:[(0,s.jsx)(f,{children:(0,s.jsxs)(j,{className:"flex items-center gap-2 dark:text-white",children:[(0,s.jsx)(C.Z,{className:"h-6 w-6"}),"Interactive Technical Demos"]})}),(0,s.jsx)(v,{children:(0,s.jsx)("div",{className:"flex flex-col gap-6",children:e.map((e,a)=>(0,s.jsxs)(b,{children:[(0,s.jsxs)(f,{children:[(0,s.jsxs)(j,{className:"flex items-center gap-2 text-lg dark:text-white",children:[(0,s.jsx)(e.icon,{className:"h-5 w-5"}),e.title]}),(0,s.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:e.description})]}),(0,s.jsx)(v,{children:e.component})]},a))})})]})})};var T=t(2468),R=t(6884),D=t(433);let L=e=>{let{title:a,description:t,code:n,demoComponent:l}=e,[i,o]=(0,r.useState)(!1),[c,d]=(0,r.useState)(!1);return(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h4",{className:"text-lg font-semibold dark:text-white",children:a}),(0,s.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-300",children:t})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(n),o(!0),setTimeout(()=>o(!1),2e3)},className:"p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600",children:i?(0,s.jsx)(T.Z,{className:"h-4 w-4 text-green-500"}):(0,s.jsx)(R.Z,{className:"h-4 w-4 dark:text-gray-300"})}),(0,s.jsx)("button",{onClick:()=>{d(!0),setTimeout(()=>d(!1),2e3)},className:"p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white",children:(0,s.jsx)(k.Z,{className:"h-4 w-4"})})]})]}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("pre",{className:"bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto",children:(0,s.jsx)("code",{className:"text-sm font-mono dark:text-gray-300",children:n})})}),(0,s.jsx)("div",{className:"transition-opacity duration-300 ".concat(c?"opacity-100":"opacity-0"),children:l})]})},M=()=>{let[e,a]=(0,r.useState)("#ffffff");return(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{type:"color",value:e,onChange:e=>a(e.target.value)}),(0,s.jsx)("div",{style:{backgroundColor:e},className:"h-48 w-full border rounded-lg mt-2",children:"Selected Color"})]})},O=()=>{let e=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(e.current){a.current&&a.current.destroy();let t=e.current.getContext("2d"),s=[{month:"Jan",value:400},{month:"Feb",value:300},{month:"Mar",value:600}];a.current=new D.ZP(t,{type:"line",data:{labels:s.map(e=>e.month),datasets:[{label:"Monthly Values",data:s.map(e=>e.value),borderColor:"#3b82f6",tension:.1}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0}},scales:{y:{beginAtZero:!0}}}})}return()=>{a.current&&a.current.destroy()}},[]),(0,s.jsx)("div",{className:"h-48",children:(0,s.jsx)("canvas",{ref:e})})},q=()=>{let e=[{title:"Data Visualization",description:"Interactive chart using Chart.js",code:"const data = [\n  { month: 'Jan', value: 400 },\n  { month: 'Feb', value: 300 },\n  { month: 'Mar', value: 600 }\n];\n\nconst ctx = chartRef.current.getContext('2d');\nnew Chart(ctx, {\n  type: 'line',\n  data: {\n    labels: data.map(d => d.month),\n    datasets: [{\n      label: 'Monthly Values',\n      data: data.map(d => d.value),\n      borderColor: '#3b82f6',\n      tension: 0.1\n    }]\n  }\n});",demoComponent:(0,s.jsx)("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:(0,s.jsx)(O,{})})},{title:"Animation Library",description:"Custom animation hook for React components",code:"const useAnimation = (duration = 1000) => {\n  const [isAnimating, setIsAnimating] = useState(false);\n  \n  const animate = useCallback(() => {\n    setIsAnimating(true);\n    setTimeout(() => setIsAnimating(false), duration);\n  }, [duration]);\n\n  return [isAnimating, animate];\n};",demoComponent:(0,s.jsx)("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("div",{className:"w-12 h-12 bg-blue-500 rounded-lg animate-bounce"}),(0,s.jsx)("div",{className:"w-12 h-12 bg-green-500 rounded-lg animate-pulse"}),(0,s.jsx)("div",{className:"w-12 h-12 bg-purple-500 rounded-lg animate-spin"})]})})},{title:"Color Picker",description:"Interactive color picker for dynamic background color",code:'const ColorPicker = () => {\n  const [color, setColor] = useState(\'#ffffff\');\n\n  return (\n    <div>\n      <input \n        type="color" \n        value={color} \n        onChange={(e) => setColor(e.target.value)} \n      />\n      <div style={{ backgroundColor: color }} className="h-48 w-full border rounded-lg mt-2">\n        Selected Color\n      </div>\n    </div>\n  );\n};',demoComponent:(0,s.jsx)("div",{className:"p-4 bg-white dark:bg-gray-800 rounded-lg",children:(0,s.jsx)(M,{})})}];return(0,s.jsx)("section",{children:(0,s.jsxs)(b,{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",children:[(0,s.jsx)(f,{children:(0,s.jsxs)(j,{className:"flex items-center gap-2 dark:text-white",children:[(0,s.jsx)(l.Z,{className:"h-6 w-6"}),"Code Examples"]})}),(0,s.jsx)(v,{children:(0,s.jsx)("div",{className:"space-y-8",children:e.map((e,a)=>(0,s.jsx)(L,{title:e.title,description:e.description,code:e.code,demoComponent:e.demoComponent},a))})})]})})},U=e=>{let{title:a,icon:t,description:r,children:n}=e;return(0,s.jsxs)(b,{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",children:[(0,s.jsxs)(f,{children:[(0,s.jsxs)(j,{className:"flex items-center gap-2 dark:text-white",children:[(0,s.jsx)(t,{className:"h-6 w-6"}),a]}),r&&(0,s.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:r})]}),(0,s.jsx)(v,{children:n})]})},z=()=>{let[e,a]=(0,r.useState)(!1),[t,b]=(0,r.useState)("overview");(0,r.useEffect)(()=>{a(window.matchMedia("(prefers-color-scheme: dark)").matches)},[]),(0,r.useEffect)(()=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[e]);let f=[{id:"overview",label:"Overview",icon:n.Z},{id:"skills",label:"Skills",icon:n.Z},{id:"code",label:"Code Examples",icon:l.Z},{id:"demos",label:"Technical Demos",icon:i.Z}];return(0,s.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8",children:[(0,s.jsx)("header",{className:"max-w-4xl mx-auto mb-8",children:(0,s.jsxs)("div",{className:"flex justify-between items-start",children:[(0,s.jsxs)("div",{className:"space-y-1",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold dark:text-white",children:"Bobby Nicholson"}),(0,s.jsx)("h2",{className:"text-2xl text-gray-600 dark:text-gray-300",children:"Technical Portfolio"})]}),(0,s.jsx)("button",{onClick:()=>a(!e),className:"p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700",children:e?(0,s.jsx)(o.Z,{className:"h-6 w-6 text-white"}):(0,s.jsx)(c.Z,{className:"h-6 w-6"})})]})}),(0,s.jsx)("nav",{className:"max-w-4xl mx-auto mb-8",children:(0,s.jsx)("div",{className:"flex space-x-2 overflow-x-auto pb-2",children:f.map(e=>(0,s.jsxs)("button",{onClick:()=>b(e.id),className:"px-4 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition-colors\n                ".concat(t===e.id?"bg-blue-500 text-white":"bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"),children:[(0,s.jsx)(e.icon,{className:"h-4 w-4"}),e.label]},e.id))})}),(0,s.jsxs)("main",{className:"max-w-4xl mx-auto space-y-8",children:["overview"===t&&(0,s.jsx)(s.Fragment,{children:[{title:"Software Developer",company:"BMG360",current:!0,type:"ui-components",achievements:["Developed TypeScript/React UI component library used to create high-converting landing pages","Built full-stack Python/PHP analytics dashboards for campaign ad data serving major brands","Created landing pages using custom component library","Managed WordPress sites for select clients"]},{title:"AI Solutions Developer",company:"Black Flag Design & NCEE",type:"ai-integration",achievements:["Created a robust teacher team facilitation tool for online and same room/same device meetings with real time graphic recorder, summary analysis, and real time concept map (all from the meeting)","Leveraged React, Express, Langchain, Langsmith, and getstream.io for innovative education tools"]},{title:"WordPress Migration Consultant",company:"Offsec previously known as Offensive Security",type:"wordpress",achievements:["Led major website architecture migration from WordPress monolith to headless WordPress","Built new frontend using Astro and Svelte","Developed automated migration tools","Implemented technical optimizations to improve site performance"]},{title:"Freelance Developer",company:"Upwork",type:"freelance",achievements:["Maintained 100% Job Success Score while serving approximately 100 clients","Delivered diverse range of frontend and backend development solutions","Successfully completed projects across various technologies and frameworks"]},{title:"Mentor",company:"OpenClassrooms",type:"mentoring",achievements:["Mentored students in web development, providing practical examples and resources to accelerate learning","Supported students in securing industry positions upon completing their programs","1.5 years of dedicated mentoring experience"]}].map((e,a)=>(0,s.jsx)(U,{title:"".concat(e.title," at ").concat(e.company),icon:n.Z,children:(0,s.jsx)("div",{className:"space-y-6",children:(0,s.jsx)("ul",{className:"list-disc list-inside space-y-2",children:e.achievements.map((e,a)=>(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:e},a))})})},a))}),"skills"===t&&(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)(U,{title:"Frontend Development",icon:d.Z,description:"Modern web development technologies and frameworks",children:(0,s.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"React, Next.js, and TypeScript expertise with focus on performance optimization"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Component library development using modern design patterns"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Responsive design and accessibility implementation"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"State management with Redux, Context API, and Zustand"})]})}),(0,s.jsx)(U,{title:"Backend Development",icon:m.Z,description:"Server-side technologies and API development",children:(0,s.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Node.js and Express.js API development"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Python backend services with FastAPI and Django"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Database design and optimization (SQL and NoSQL)"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"RESTful API and GraphQL implementation"})]})}),(0,s.jsx)(U,{title:"Cloud & DevOps",icon:x.Z,description:"Cloud infrastructure and deployment expertise",children:(0,s.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"AWS and Digital Ocean cloud infrastructure management"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Docker containerization and Kubernetes orchestration"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"CI/CD pipeline implementation with GitHub Actions"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Infrastructure as Code using Terraform"})]})}),(0,s.jsx)(U,{title:"AI Integration",icon:g.Z,description:"AI and ML implementation experience",children:(0,s.jsxs)("ul",{className:"list-disc list-inside space-y-2",children:[(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"LangChain and LangSmith implementation for AI applications"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"OpenAI API integration and prompt engineering"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Vector database implementation for AI applications"}),(0,s.jsx)("li",{className:"text-gray-700 dark:text-gray-300",children:"Real-time AI processing and streaming responses"})]})})]}),"code"===t&&(0,s.jsx)(U,{title:"Code Examples",icon:l.Z,description:"Interactive code examples with live previews",children:(0,s.jsx)(q,{})}),"demos"===t&&(0,s.jsx)(U,{title:"Technical Demonstrations",icon:i.Z,description:"Interactive technical demos showcasing various capabilities",children:(0,s.jsx)(P,{})}),"performance"===t&&(0,s.jsx)(U,{title:"Performance Metrics",icon:p.Z,description:"Real-time performance monitoring and analytics",children:(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6"})})]}),(0,s.jsx)("footer",{className:"max-w-4xl mx-auto mt-12 pb-8",children:(0,s.jsxs)("div",{className:"bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6",children:[(0,s.jsx)("h2",{className:"text-xl font-semibold mb-4 dark:text-white",children:"Let's Connect"}),(0,s.jsxs)("div",{className:"flex flex-wrap gap-4",children:[(0,s.jsxs)("a",{href:"mailto:bobbynicholson78704@gmail.com",className:"flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors",children:[(0,s.jsx)(u.Z,{className:"h-5 w-5"}),(0,s.jsx)("span",{children:"bobbynicholson78704@gmail.com"})]}),(0,s.jsxs)("a",{href:"https://github.com/SelfTaughtCoder78704",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors",children:[(0,s.jsx)(h.Z,{className:"h-5 w-5"}),(0,s.jsx)("span",{children:"GitHub"})]}),(0,s.jsxs)("a",{href:"https://www.linkedin.com/in/bobby-n-760b16155/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors",children:[(0,s.jsx)(y.Z,{className:"h-5 w-5"}),(0,s.jsx)("span",{children:"LinkedIn"})]})]})]})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[674,497,130,215,744],()=>a(3801)),_N_E=e.O()}]);