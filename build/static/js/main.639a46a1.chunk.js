(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(14),l=a.n(c),r=(a(21),a(2)),i=a(3),s=a(6),m=a(4),d=a(7),u=a(5),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(u.a)({},n,o))},a.onSubmit=function(e){e.preventDefault(),console.log("Submiting ",a.state.channel),a.props.selectChannel(a.state.channel),a.setState({channel:""})},a.state={channel:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row text-center"},o.a.createElement("h2",{className:"text-center mt-3 col-12"},"Agora Chat Application"),o.a.createElement("form",{class:"form-inline mt-5 text-center col-6 offset-3",onSubmit:this.onSubmit},o.a.createElement("div",{class:"form-group mx-sm-3 mb-2"},o.a.createElement("label",{for:"channel2",className:"mr-3"},"Channel Name"),o.a.createElement("input",{type:"text",class:"form-control",name:"channel",id:"channel2",placeholder:"Enter channel name",value:this.state.channel,onChange:this.onChange})),o.a.createElement("button",{type:"submit",class:"btn btn-primary mb-2"},"Join Channel")))}}]),t}(n.Component),h=a(15),f=a(11),g=a.n(f),v=a(32),p=a(12),S=a(9),E=g.a.createClient({mode:"live",codec:"h264"}),C=Object(v.a)(),j="1c721d1e1404469382d7d9b70d7f6bfa",A=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).localStream=g.a.createStream({streamID:C,audio:!0,video:!0,screen:!1,mediaSource:"screen"}),a.state={enabledCamera:!1,enabledMic:!1,isHost:!1,isJoiner:!1,remoteStreams:[]},a.initLocalStream=function(){a.localStream.init(function(){console.log("getUserMedia successfully"),a.localStream.play("agora_local")},function(e){console.log("getUserMedia failed",e)})},a.initClient=function(){E.init(j,function(){a.setState({isHost:!0}),console.log("AgoraRTC client initialized")},function(e){console.log("AgoraRTC client init failed",e)}),a.subscribeToClient()},a.subscribeToClient=function(){E.on("stream-added",a.onStreamAdded),E.on("stream-subscribed",a.onRemoteClientAdded),E.on("stream-removed",a.onStreamRemoved),E.on("peer-leave",a.onPeerLeave)},a.screenShare=function(){a.localStream.setScreenProfile("480p_1")},a.onStreamAdded=function(e){var t=e.stream;console.log("New stream added: "+t.getId()),a.setState({remoteStreams:Object(h.a)({},a.state.remoteStream,Object(u.a)({},t.getId(),t))},function(){E.subscribe(t,function(e){console.log("Subscribe stream failed",e)})})},a.joinChannel=function(){var e=Object(v.a)();E.join("0061c721d1e1404469382d7d9b70d7f6bfaIABqWt1KsDY3Z/SMaLGV9czji39NYdgMNhx6ExNeh44NAKu95ggAAAAAEAAEa9nrGKZDYAEAAQAXpkNg",a.props.channel,e,function(e){console.log("User "+e+" join channel successfully"),E.publish(a.localStream,function(e){console.log("Publish local stream error: "+e)}),E.on("stream-published",function(e){console.log("Publish local stream successfully")})},function(e){console.log("Join channel failed",e)})},a.onRemoteClientAdded=function(e){var t=e.stream;a.state.remoteStreams[t.getId()].play("agora_remote "+t.getId())},a.onStreamRemoved=function(e){var t=e.stream;if(t){var n=t.getId(),o=a.state.remoteStreams;t.stop(),delete o[n],a.setState({remoteStreams:o}),console.log("Remote stream is removed "+t.getId())}},a.onLeave=function(){E.leave(function(){console.log("client leaves channel")},function(e){console.log("client leave failed ",e)})},a.cameraEnable=function(){a.state.enabledCamera?(a.localStream.enableVideo(),a.setState({enabledCamera:!1})):(a.localStream.disableVideo(),a.setState({enabledCamera:!0}))},a.micEnableDisable=function(){a.state.enabledMic?(a.localStream.enableAudio(),a.setState({enabledMic:!1})):(a.localStream.disableAudio(),a.setState({enabledMic:!0}))},a.onLeaveMeeting=function(){a.localStream.stop(),E.leave()},a.onPeerLeave=function(e){var t=e.stream;if(t){var n=t.getId(),o=a.state.remoteStreams;t.stop(),delete o[n],a.setState({remoteStreams:o}),console.log(e.uid+" leaved from this channel")}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.initLocalStream(),this.initClient()}},{key:"componentDidUpdate",value:function(e,t){e.channel!==this.props.channel&&""!==this.props.channel&&this.joinChannel()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"row ml-5 mt-5"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{id:"agora_local",className:"img-thumbnail",style:{height:"400px",width:"500px"}})),o.a.createElement("div",{className:"col-md-6"},Object.keys(this.state.remoteStreams).map(function(t){var a=e.state.remoteStreams[t].getId();return o.a.createElement("div",{key:a},o.a.createElement("div",{id:"agora_remote ".concat(a),className:"img-thumbnail",style:{height:"400px",width:"500px"}}))})),o.a.createElement("div",{className:"row mt-5 mb-5"},o.a.createElement("button",{className:"btn mr-3",onClick:function(){return e.cameraEnable()}},o.a.createElement(p.a,{icon:this.state.enabledCamera?S.d:S.c})),o.a.createElement("button",{className:"btn btn mr-3",onClick:function(){return e.micEnableDisable()}},o.a.createElement(p.a,{icon:this.state.enabledMic?S.b:S.a})),o.a.createElement("button",{className:"btn btn-danger btn mr-3",onClick:function(t){return e.onLeaveMeeting(t)}},"Leave Meeting")))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).selectChannel=function(e){a.setState({channel:e})},a.state={channel:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App container"},o.a.createElement(b,{selectChannel:this.selectChannel}),o.a.createElement(A,{channel:this.state.channel}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28);l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.639a46a1.chunk.js.map