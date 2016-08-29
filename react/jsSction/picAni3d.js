import $ from 'jquery';
export class Pic3DAni{
    constructor(){
        // this.oUl = document.querySelector('.pic3DAni');

        this.oUl = $('.pic3DAni');
        // this.oUl = document.getElementById('pic3DAni');
        this.N = 11;
        // this.baseAni();
        this.baseAni1();
        

        this.aLi=this.oUl.children;
        this.y=0;
        this.x=45;
        this.speedX=0;
        this.speedY=0;
        this.lastX=0;
        this.lastY=0;
        this.timer=null;

        // this.oO = document.querySelector('.Pic3D');
        this.oO = $('.Pic3D');
        this.AniIniti();
    }
    SH(){
        window.onload = function(){
            new Pic3DAni();

        }
    }
    baseAni1(){
        for(let i=0; i<this.N;i++){
            let oLi=document.createElement('li');
            oLi.style.backgroundImage='url(react/images/img3/'+(i+1)+'.jpg)';
            // this.oUl.appendChild(oLi);
            this.oUl.append($(oLi));
            // let oUl1 = document.querySelector('.pic3DAni');
            // this.oUl.appendChild(oLi);
            oLi.style.WebkitTransition='0.5s all ease '+200*(this.N-i)+'ms';
            
            //变的比过渡还快 - 让它慢一些执行
            ((oLi,i)=>{
                setTimeout(()=>{
                    oLi.style.WebkitTransform='rotateY('+360/(this.N)*i+'deg) translateZ(400px)';  
                },0);   
            })(oLi,i);
        }
    }
    baseAni(){
        // console.log(this.oUl)
        console.log('oLI:',this.aLi);
        for(let name in this.aLi){
            let oLi=name;
            console.log('oLI:',oLi);

            oLi.style.WebkitTransition='0.5s all ease '+200*(this.N-i)+'ms';
            
            //变的比过渡还快 - 让它慢一些执行
            ((oLi,i)=>{
                setTimeout(()=>{
                    oLi.style.WebkitTransform='rotateY('+360/(this.N)*i+'deg) translateZ(400px)';  
                },0);   
            })(oLi,i);
        }
    }
    change(y,x){
        for(let i=0; i<this.aLi.length;i++){
            this.aLi[i].style.WebkitTransition='none';
            this.aLi[i].style.WebkitTransform='rotateY('+(360/this.N*i+y)+'deg) translateZ(400px)';
            this.oUl.style.WebkitTransform='perspective(800px) rotateX('+-x+'deg)';
            let scale=Math.abs(Math.abs((360/this.N*i+y)%360)-180)/180;
            scale<0.4&&(scale=0.4);
            this.aLi[i].style.opacity=scale;
        }   
    }
    AniIniti(){
        this.oO.mousedown((ev)=>{
            // alert('push!!');
            clearInterval(this.timer);
            let disX=ev.clientX-this.y;
            let disY=ev.clientY-this.x;
            document.onmousemove=(ev)=>{
                this.y=ev.clientX-disX;
                this.x=ev.clientY-disY;
                this.change(this.y/3,this.x/3);
                
                this.speedX=ev.clientX-this.lastX;
                this.speedY=ev.clientY-this.lastY;
                
                this.lastX=ev.clientX;
                this.lastY=ev.clientY;
            };
            document.onmouseup=()=>{
                document.onmouseup=null;
                document.onmousemove=null;  
                
                alert(this.speedX);
                
                this.timer=setInterval(()=>{
                    this.speedX*=0.95;
                    this.speedY*=0.95;
                    this.y+=this.speedX;
                    this.x+=this.speedY;
                    
                    this.change(this.y/3,this.x/3);    
                    
                    if(Math.abs(this.speedX)<=1){
                        clearInterval(this.timer);
                        alert('停止了');
                    }
                    
                },30);
            
            };
            return false;
        })
    }
}



