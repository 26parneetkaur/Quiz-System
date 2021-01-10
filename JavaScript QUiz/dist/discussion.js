var a=[];
	 if(localStorage.getItem("questions")!=undefined)
	 {
		 a=JSON.parse(localStorage.getItem("questions"));
     }		 
	 var btn=document.getElementById("add");
	 var submitans=document.getElementById("submitans");
	 var submitqus=document.getElementById("submitqus");
	 var right1=document.getElementById("rightcontainer1");
	 var right2=document.getElementById("rightcontainer2");
	 var subject=document.getElementById("subject");
	 var question=document.getElementById("question");
	 var questionlist=document.getElementById("questionlist");
	 var questionlabel=document.getElementById("questionlabel");
	 var subjectlabel=document.getElementById("subjectlabel");
	 var prevans=document.getElementById("previousans");
	 var name1=document.getElementById("name1");
	 var name2=document.getElementById("name2");
	 var search=document.getElementById("search");
	 var resolve=document.getElementById("resolve");
	 btn.addEventListener("click",add);
	 function add()
	 {
	   right2.style.display="none";
	   right1.style.display="block";
	 }
	 append_list(a);
	 submitqus.addEventListener("click",add_to_list);
	 var res={}
	 
	 function add_to_list()
	 {
	   if(subject.value!=""&&question.value!=""&&name1.value!="")
	   {
	    var b={subject:subject.value,question:question.value,author:name1.value,answer:[],flag:1};
		  a.push(b);
			question.value="";
		  subject.value="";
		  name1.value="";
		  console.log(a);
		  append_list(a);
	   }
	 }
	 
	 function append_list(z)
	 {
			let l=z.length;
			questionlist.innerHTML="";
			localStorage.removeItem("questions");
		    localStorage.setItem("questions",JSON.stringify(a));
			for(let i=0;i<=l-1;i++)
			{
				let n=document.createElement("div");
				let n1=document.createElement("h2");
				n1.style.margin="0px";
				n1.innerHTML=z[i].subject;
				let n2=document.createElement("h4");
				n2.style.margin="0px";
				n2.innerHTML=z[i].question;
				n.appendChild(n1);
				n.appendChild(n2);
				let n3=document.createElement("h5");
				n3.style.marginBottom="0px";
				n3.innerHTML="Asked by "+z[i].author;
				n.append(n3);
				n.style.height="20%";
				n.title="Click on it to view";
				n.style.background="#f0f5f5";
				n.style.color="gray";
				n.style.overflow="auto";
				n.style.margin="auto";
				n.style.padding="10px";
				n.style.border="1px solid gray"
				n.addEventListener("click",function()
		                        	{
										console.log("clicked");
										right1.style.display="none";
										right2.style.display="block"
										prevans.innerHTML=""
										subjectlabel.innerHTML=z[i].subject;
										questionlabel.innerHTML=z[i].question;
										if(z[i].answer.length!=0)
										{
                                           for(let b=0;b<=z[i].answer.length-1;b++)
										   {
											    let n=document.createElement("div");
												let n1=document.createElement("h2");
												n1.style.margin="0px";
												n1.innerHTML=z[i].answer[b].ans;
												console.log(z[i].answer[b].ans);
												let n2=document.createElement("h4");
												n2.style.margin="0px";
												n2.innerHTML="Answered by "+z[i].answer[b].personname;
												n.appendChild(n1);
												n.appendChild(n2);
												n.style.overflow="auto";
												prevans.appendChild(n);		 
											}
										}
						           });
			questionlist.appendChild(n);													
		  }
	 }	
	 submitans.addEventListener("click",addanswer);
	 function addanswer()
	 {
		 let x=questionlabel.innerHTML;
		 let y=subjectlabel.innerHTML;
		 let y1=name2.value;
		 let z=document.getElementById("answer").value;
		 let j=0;
		 if(y1!=""&&z!="")
		 {
			 //console.log("y1 is "+y1);
			 //console.log("z is "+z);
			 var response={personname:y1,ans:z};
			 //console.log("outside");
			 for(j=0;j<=a.length-1;j++)
			 {
				 console.log(a[j].question+" == "+x);
				 if(x==a[j].question)
				 {
					 console.log("equal");
					 a[j].answer.push(response);
					 break;
				 }
			 }
				let n=document.createElement("div");
				let n1=document.createElement("h2");
				n1.style.margin="0px";
				n1.innerHTML=z;
				//console.log(z[i].answer[].ans);
				let n2=document.createElement("h5");
				n2.style.margin="0px";
				n2.innerHTML="Answered by "+y1;
				n.appendChild(n1);
				n.appendChild(n2);
				n.style.overflow="auto";
				n.style.border="1px solid";
				prevans.appendChild(n);
				name2.value="";
				document.getElementById("answer").value="";
                append_list(a);	
		 }
         else
		 {
			 alert("please fill required boxes");
         }			 
	 }
	 search.addEventListener("input",search_qus);
	 function search_qus()
	 {
		var f=[];
		 let val=search.value;
		 //console.log("hello");
		 for(let i=0;i<=a.length-1;i++)
		 {
			 if(a[i].question.includes(val))
			 {
               f.push(a[i]);
			 }
		 }		 
		 if(f.length==0)
		 {
            questionlist.innerHTML="<h2> Question not present in the list</h2>";
		 }
		 else
		 {
             append_list(f);
		 }
	 }
	 resolve.addEventListener("click",function()
	 {
		 for(let y=0;y<=a.length-1;y++)
		 {
			 if(a[y].question==questionlabel.innerHTML)
			 {
				 var r=confirm("D0 You Want To Delete It From The List");
				 if(r==true)
				 {
				   a.splice(y,1);
				   right2.style.display="none";
	               right1.style.display="block";
                 }				   
		     }		 
		 }	
         append_list(a);		 
	 });