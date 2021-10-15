(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{237:function(t,e,a){t.exports=a.p+"assets/img/normal_mapping_correct.2731b486.png"},268:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"news"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#news"}},[t._v("#")]),t._v(" News")]),t._v(" "),s("h2",{attrs:{id:"_0-11-further-changes-to-surface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-11-further-changes-to-surface"}},[t._v("#")]),t._v(" 0.11 further changes to Surface")]),t._v(" "),s("p",[s("code",[t._v("SwapchainFrame")]),t._v(" is no longer a thing. Instead "),s("code",[t._v("get_current_texture")]),t._v(" will return a "),s("code",[t._v("SurfaceTexture")]),t._v(" directly. This means that getting a frame to draw to looks somethings like this:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_current_texture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" output\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("texture\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextureViewDescriptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Another change is that you must call "),s("code",[t._v("SurfaceTexture::present()")]),t._v(" after you submit your render command buffers to the "),s("code",[t._v("queue")]),t._v(". It goes something like this:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("iter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("once")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("finish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\noutput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("present")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("There a good deal of internal changes such as WebGL support (which I really need to cover). You can check out more on wgpu's "),s("a",{attrs:{href:"https://github.com/gfx-rs/wgpu/blob/master/CHANGELOG.md#wgpu-011-2021-10-07",target:"_blank",rel:"noopener noreferrer"}},[t._v("changelog"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"pong-is-fixed-for-0-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pong-is-fixed-for-0-10"}},[t._v("#")]),t._v(" Pong is fixed for 0.10")]),t._v(" "),s("p",[t._v("It wasn't actually that hard of a fix. I only really use the swapchain directly in the render module, and the only other change required me to include the "),s("code",[t._v("spirv")]),t._v(" feature to wgpu in Cargo.toml.")]),t._v(" "),s("h2",{attrs:{id:"_0-10-swapchain-is-dead-long-live-the-surface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-10-swapchain-is-dead-long-live-the-surface"}},[t._v("#")]),t._v(" 0.10 SwapChain is dead, long live the Surface!")]),t._v(" "),s("p",[s("code",[t._v("SwapChain")]),t._v(" and all related code has been removed from wgpu. All code pertaining to obtaining textures to draw to from the window will be available from the "),s("code",[t._v("Surface")]),t._v(" instead. That means configuring "),s("code",[t._v("SurfaceTexture")]),t._v("s will look something like this:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SurfaceConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    usage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextureUsages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RENDER_ATTACHMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_preferred_format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("adapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    present_mode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PresentMode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fifo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsurface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Resizing the surface will use similar code:")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Finally, getting a "),s("code",[t._v("SurfaceTexture")]),t._v(" to draw to will use the surface directly.")]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" output "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("surface"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_current_texture")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" view "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" output\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("texture\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create_view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextureViewDescriptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The Pong and imgui examples are broken again. I may remove the imgui example as the corresponding crate already has examples on how to use it. I'm also considering reworking the Pong example, but I may end up just updating it.")]),t._v(" "),s("h2",{attrs:{id:"pong-and-imgui-demos-are-fixed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pong-and-imgui-demos-are-fixed"}},[t._v("#")]),t._v(" Pong and imgui demos are fixed!")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("imgui_wgpu")]),t._v(" and "),s("code",[t._v("wgpu_glyph")]),t._v(" crates have been updated to "),s("code",[t._v("wgpu")]),t._v(" 0.8 so I was able to fixed the demos! They both still use GLSL, and I don't think I'll be changing that for now. I may switch them over to "),s("code",[t._v("naga")]),t._v(" at some point.")]),t._v(" "),s("h2",{attrs:{id:"_0-8-and-wgsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-and-wgsl"}},[t._v("#")]),t._v(" 0.8 and WGSL")]),t._v(" "),s("h3",{attrs:{id:"the-glsl-shaders-have-been-translated-to-wgsl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-glsl-shaders-have-been-translated-to-wgsl"}},[t._v("#")]),t._v(" The GLSL shaders have been translated to WGSL")]),t._v(" "),s("p",[t._v("Originally I wanted to wait until the WGSL spec fully stabilized, but due to some issues with the GLSL code, I've decided to switch over the code now. While GLSL is supported by WebGPU, it's currently secondary to WGSL. I'll keep an example of how to use GLSL (and maybe add HLSL and Metal as well), but I'm going to use WGSL from now on.")]),t._v(" "),s("h3",{attrs:{id:"shaderc-has-been-removed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shaderc-has-been-removed"}},[t._v("#")]),t._v(" Shaderc has been removed")]),t._v(" "),s("p",[t._v("I've been thinking about doing this for a while now. Because shaderc is a c library, it often has to be redownloaded during builds. This has been slowing down my ability to add new content and maintain old content. I had been considering switching to naga earlier, but some of my shaders (notably the lighting ones) weren't compiling with naga as I was using features not available for compatibility reasons ("),s("code",[t._v("inverse")]),t._v(" is not available in all languages targeting spirv).")]),t._v(" "),s("p",[t._v("Since I needed to make a bunch of changes to the code base to make the glsl, and because I wanted to switch the tutorial to WGSL anyways, I decided to bite the bullet and recode everything in WGSL and remove shaderc from the tutorials.")]),t._v(" "),s("h3",{attrs:{id:"some-of-the-showcase-examples-are-broken"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#some-of-the-showcase-examples-are-broken"}},[t._v("#")]),t._v(" Some of the showcase examples are broken")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("wgpu_glyph")]),t._v(", and "),s("code",[t._v("imgui-wgpu")]),t._v(" crates currently depend on "),s("code",[t._v("wgpu")]),t._v(" 0.7, which is causing the "),s("code",[t._v("pong")]),t._v(" and "),s("code",[t._v("imgui-demo")]),t._v(" to not compile. I decided to excluded them from the workspace until the underlying crates update to using "),s("code",[t._v("wgpu")]),t._v(" 0.8. (Feel free to submit a issue or even PR when that happens!)")]),t._v(" "),s("h3",{attrs:{id:"various-api-changes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#various-api-changes"}},[t._v("#")]),t._v(" Various API changes")]),t._v(" "),s("ul",[s("li",[t._v("The "),s("code",[t._v("depth")]),t._v(" field is now "),s("code",[t._v("depth_or_array_layers")])]),t._v(" "),s("li",[s("code",[t._v("wgpu::VertexFormat::Float3")]),t._v(" is now "),s("code",[t._v("wgpu::VertexFormat::Float32x3")]),t._v(". Similar things apply to "),s("code",[t._v("Float2")]),t._v(" and "),s("code",[t._v("Float4")])]),t._v(" "),s("li",[s("code",[t._v("CullMode")]),t._v(" is no longer a thing, instead "),s("code",[t._v("PrimitiveState::cull_mode")]),t._v(" will require an "),s("code",[t._v("Option<Face>")])]),t._v(" "),s("li",[t._v("Added "),s("code",[t._v("clamp_depth")]),t._v(" and "),s("code",[t._v("conservative")]),t._v(" to "),s("code",[t._v("PrimitiveState")]),t._v(". Part of this means that "),s("code",[t._v("DepthStencilState")]),t._v(" no longer has a "),s("code",[t._v("clamp_depth")]),t._v(" field.")]),t._v(" "),s("li",[s("code",[t._v("color_blend")]),t._v(" and "),s("code",[t._v("alpha_blend")]),t._v(" have been moved into the new "),s("code",[t._v("blend")]),t._v(" field with accepts an "),s("code",[t._v("Option<wgpu::BlendState>")])]),t._v(" "),s("li",[s("code",[t._v("adapter.get_preferred_format()")]),t._v(" now returns an "),s("code",[t._v("Option<wgpu::TextureFormat>")])]),t._v(" "),s("li",[s("code",[t._v("wgpu::RenderPassColorAttachmentDescriptor")]),t._v(" has been renamed "),s("code",[t._v("wgpu::RenderPassColorAttachement")]),t._v(" and the "),s("code",[t._v("attachment")]),t._v(" field has been renamed to "),s("code",[t._v("view")])]),t._v(" "),s("li",[s("code",[t._v("wgpu::RenderPassDepthStencialAttachmentDescriptor")]),t._v(" also loses the "),s("code",[t._v("Descriptor")]),t._v(" part of it's name. "),s("code",[t._v("attachment")]),t._v(" gets renamed to "),s("code",[t._v("view")]),t._v(" as well.")]),t._v(" "),s("li",[s("code",[t._v("wgpu::TextureCopyView")]),t._v(" has been renamed to "),s("code",[t._v("wgpu::ImageCopyTexture")]),t._v(". This is a typedef for "),s("code",[t._v("wgpu::ImageCopyTextureBase<T>")])]),t._v(" "),s("li",[s("code",[t._v("wgpu::TextureDataLayout")]),t._v(" is now "),s("code",[t._v("wgpu::ImageDataLayout")]),t._v(" and it's "),s("code",[t._v("bytes_per_row")]),t._v(" and "),s("code",[t._v("rows_per_image")]),t._v(" now take "),s("code",[t._v("NonZeroU32")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("wgpu::ImageCopyBuffer")]),t._v(" is now "),s("code",[t._v("wgpu::ImageCopyBuffer")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"_0-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-7"}},[t._v("#")]),t._v(" 0.7")]),t._v(" "),s("p",[t._v("There were a lot of changes particularly to the "),s("code",[t._v("RenderPipelineDescriptor")]),t._v(". Most other things have not changed. You can check out the "),s("a",{attrs:{href:"https://github.com/sotrh/learn-wgpu/pull/140",target:"_blank",rel:"noopener noreferrer"}},[t._v("0.9 PR"),s("OutboundLink")],1),t._v(" for the full details.")]),t._v(" "),s("h2",{attrs:{id:"november-2020-cleanup-content-freeze-and-patreon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#november-2020-cleanup-content-freeze-and-patreon"}},[t._v("#")]),t._v(" November 2020 Cleanup, Content Freeze, and Patreon")]),t._v(" "),s("p",[t._v("School is starting to ramp up, so I haven't had as much time to work on the site as I would like to. Because of that there were some issues piling up. I decided to tackle a bunch of them in one go. Here's a snapshot of what I did:")]),t._v(" "),s("ul",[s("li",[t._v("The tutorial now handles "),s("code",[t._v("SurfaceError")]),t._v(" properly")]),t._v(" "),s("li",[t._v("I'm now using bytemuck's derive feature on all buffer data structs.")]),t._v(" "),s("li",[t._v("The "),s("a",{attrs:{href:"../beginner/tutorial7-instancing"}},[t._v("instancing tutorial")]),t._v(" now uses vertex buffers instead of storage buffers.")]),t._v(" "),s("li",[s("code",[t._v("build.rs")]),t._v(" now updates when individual shaders are changed, not whenever "),s("code",[t._v("/src")]),t._v(" is changed.")]),t._v(" "),s("li",[t._v("Had some help from Github user @kanerogers to clean up the "),s("a",{attrs:{href:"../beginner/tutorial5-textures"}},[t._v("texturing tutorial")]),t._v(".")]),t._v(" "),s("li",[t._v("I made a "),s("a",{attrs:{href:"../showcase/compute"}},[t._v("compute pipeline showcase")]),t._v(" that computes the tangent and bitangent for each vertex in a model.")]),t._v(" "),s("li",[t._v("I made a "),s("a",{attrs:{href:"../showcase/imgui-demo"}},[t._v("imgui showcase")]),t._v(". It's very basic, but it should be a good starting point.")])]),t._v(" "),s("p",[t._v('Now in the headline I mentioned a "Content Freeze". Wgpu is still a moving target. The migration from '),s("code",[t._v("0.4")]),t._v(" to "),s("code",[t._v("0.5")]),t._v(" was lot of work. The same goes for "),s("code",[t._v("0.5")]),t._v(" to "),s("code",[t._v("0.6")]),t._v(". I'm expected the next migration to be just as much work. As such, I won't be added much content until the API becomes a bit more stable. That being said, I still plan on resolving any issues with the content.")]),t._v(" "),s("p",[t._v("One more thing. This is actually quite awkward for me (especially since I'll be slowing down development), but I've started a "),s("a",{attrs:{href:"https://www.patreon.com/sotrh",target:"_blank",rel:"noopener noreferrer"}},[t._v("patreon"),s("OutboundLink")],1),t._v(". My job doesn't give me a ton of hours, so things are a bit tight. You are by no means obligated to donate, but I would appreciate it.")]),t._v(" "),s("p",[t._v("You can find out more about contributing to this project on the "),s("RouterLink",{attrs:{to:"/#contribution-and-support"}},[t._v("introduction page")])],1),t._v(" "),s("h2",{attrs:{id:"_0-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-6"}},[t._v("#")]),t._v(" 0.6")]),t._v(" "),s("p",[t._v("This took me way too long. The changes weren't difficult, but I had to do a lot of copy pasting. The main changes are using "),s("code",[t._v("queue.write_buffer()")]),t._v(" and "),s("code",[t._v("queue.write_texture()")]),t._v(" everywhere. I won't get into the nitty gritty, but you can checkout the "),s("a",{attrs:{href:"https://github.com/sotrh/learn-wgpu/pull/90",target:"_blank",rel:"noopener noreferrer"}},[t._v("pull request"),s("OutboundLink")],1),t._v(" if you're interested.")]),t._v(" "),s("h2",{attrs:{id:"added-pong-showcase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#added-pong-showcase"}},[t._v("#")]),t._v(" Added Pong Showcase")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/showcase/pong/"}},[t._v("See it here")])],1),t._v(" "),s("h2",{attrs:{id:"normal-mapping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normal-mapping"}},[t._v("#")]),t._v(" Normal mapping")]),t._v(" "),s("p",[t._v('My perfectionism got in my way a bit with this one. I wasn\'t sure that what I was getting was "physically accurate", but it seems to look good.')]),t._v(" "),s("p",[s("img",{attrs:{src:a(237),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_0-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-5"}},[t._v("#")]),t._v(" 0.5!")]),t._v(" "),s("p",[t._v("Too many things changed to make note of them here. Check out "),s("a",{attrs:{href:"https://github.com/sotrh/learn-wgpu/pull/29",target:"_blank",rel:"noopener noreferrer"}},[t._v("the 0.5 pull request"),s("OutboundLink")],1),t._v(" if you're curious about specifics. That being said, 2 things are worth mentioning directly: the y-axis now points up like with DirectX and Metal, and requesting an adapter and creating a device now use "),s("code",[t._v("Future")]),t._v("s. The tutorials have been updated as well as the code.")]),t._v(" "),s("h2",{attrs:{id:"reworked-lighting-tutorial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reworked-lighting-tutorial"}},[t._v("#")]),t._v(" Reworked lighting tutorial")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/intermediate/tutorial10-lighting/"}},[t._v("lighting tutorial")]),t._v(" was not up to par, so I redid it.")],1),t._v(" "),s("h2",{attrs:{id:"added-gif-showcase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#added-gif-showcase"}},[t._v("#")]),t._v(" Added GIF showcase")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/showcase/gifs/"}},[t._v("Creating GIFs")])],1),t._v(" "),s("h2",{attrs:{id:"updated-texture-tutorials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updated-texture-tutorials"}},[t._v("#")]),t._v(" Updated texture tutorials")]),t._v(" "),s("p",[t._v("Up to this point, we created textures manually everytime. I've pulled out the texture creation code into a new "),s("code",[t._v("texture.rs")]),t._v(" file and included it every tutorial from the "),s("RouterLink",{attrs:{to:"/beginner/tutorial5-textures/#cleaning-things-up"}},[t._v("textures tutorial")]),t._v(" onward.")],1),t._v(" "),s("h2",{attrs:{id:"fixed-panics-do-to-not-specifying-the-correct-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-panics-do-to-not-specifying-the-correct-usage"}},[t._v("#")]),t._v(" Fixed panics do to not specifying the correct "),s("code",[t._v("usage")])]),t._v(" "),s("p",[t._v("Wgpu has become more strict about what "),s("code",[t._v("BufferUsages")]),t._v("s and "),s("code",[t._v("TextureUsages")]),t._v("s are required when performing certain operations. For example int the "),s("RouterLink",{attrs:{to:"/intermediate/windowless/"}},[t._v("Wgpu without a window example")]),t._v(", the "),s("code",[t._v("texture_desc")]),t._v(" only specified the usage to by "),s("code",[t._v("COPY_SRC")]),t._v(". This caused a crash when the "),s("code",[t._v("texture")]),t._v(" was used as a render target. Adding "),s("code",[t._v("OUTPUT_ATTACHMENT")]),t._v(" fixed the issue.")],1),t._v(" "),s("h2",{attrs:{id:"updating-winit-from-0-20-0-alpha5-to-0-20"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-winit-from-0-20-0-alpha5-to-0-20"}},[t._v("#")]),t._v(" Updating Winit from 0.20.0-alpha5 to 0.20")]),t._v(" "),s("p",[t._v("There were a lot of small changes to how the dpi stuff works. You can see all the changes "),s("a",{attrs:{href:"https://github.com/rust-windowing/winit/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("in the changelog"),s("OutboundLink")],1),t._v(". That means that some of the tutorials had to change.")]),t._v(" "),s("ul",[s("li",[t._v("I've removed "),s("code",[t._v("hidpi_factor")]),t._v(" from "),s("code",[t._v("State")]),t._v(" entirely. They removed the "),s("code",[t._v("hidpi_factor()")]),t._v(" method from "),s("code",[t._v("winit::window::Window")]),t._v(", and changed "),s("code",[t._v("inner_size()")]),t._v(" to return "),s("code",[t._v("PhysicalSize")]),t._v(" instead of "),s("code",[t._v("LogicalSize")]),t._v(", so we don't need to store the "),s("code",[t._v("hidpi_factor")]),t._v(" anymore.")]),t._v(" "),s("li",[s("code",[t._v("update_hidpi_and_resize")]),t._v(" is no more. Since "),s("code",[t._v("ScaleFactorChanged")]),t._v(" passes in the windows new "),s("code",[t._v("PhysicalSize")]),t._v(", we can simply use "),s("code",[t._v("resize()")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("State::size")]),t._v(" is now "),s("code",[t._v("PhysicalSize<u32>")]),t._v(" instead of the pre 0.20 "),s("code",[t._v("LogicalSize")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("EventsCleared")]),t._v(" is now "),s("code",[t._v("MainEventsCleared")]),t._v(".")])]),t._v(" "),s("p",[t._v("I may have missed a change, but I made sure that all the examples compile an run, so if you have trouble with your code you can use them as a reference.")]),t._v(" "),s("h2",{attrs:{id:"changed-tutorial-examples-to-use-a-src-directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changed-tutorial-examples-to-use-a-src-directory"}},[t._v("#")]),t._v(" Changed tutorial examples to use a src directory")]),t._v(" "),s("p",[t._v("I wasn't using the traditional cargo binary folder setup. I've changed it to the standardized form now.")]),t._v(" "),s("h2",{attrs:{id:"updating-to-0-4-from-0-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updating-to-0-4-from-0-3"}},[t._v("#")]),t._v(" Updating to 0.4 from 0.3")]),t._v(" "),s("p",[t._v("There are a few things that have changed:")]),t._v(" "),s("ol",[s("li",[t._v("The use of "),s("code",[t._v("Instance")]),t._v(" has been removed. Creating a "),s("code",[t._v("Surface")]),t._v(" and requesting an "),s("code",[t._v("Adapter")]),t._v(" are done as follows.")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" surface "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Surface")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" adapter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Adapter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("wgpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestAdapterOptions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwrap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// needs to be unwrapped")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("The "),s("code",[t._v("request_device")]),t._v(" method now returns a "),s("code",[t._v("(Device, Queue)")]),t._v(" tuple. This means that you can borrow the "),s("code",[t._v("Queue")]),t._v(" mutably while using the "),s("code",[t._v("Device")]),t._v(" immutably. Because of this change, submitting "),s("code",[t._v("CommandBuffer")]),t._v("s to the queue uses the "),s("code",[t._v("submit")]),t._v(" method on the "),s("code",[t._v("Queue")]),t._v(" directly.")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("submit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    encoder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("finish")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("The "),s("code",[t._v("create")]),t._v(" method on "),s("code",[t._v("Surface")]),t._v(" takes in any struct that implements the "),s("code",[t._v("HasRawWindow")]),t._v(" trait, instead of a "),s("code",[t._v("RawWindowHandle")]),t._v(". This means that the "),s("code",[t._v('raw-window-handle = "0.3"')]),t._v(" line in "),s("code",[t._v("Cargo.toml")]),t._v(" is no longer needed.")])]),t._v(" "),s("p",[t._v("I don't know if this is a change from 0.4, but you use "),s("code",[t._v('wgpu = "0.4"')]),t._v(" line in dependencies instead of the "),s("code",[t._v("[dependencies.wgpu]")]),t._v(" as wgpu will determine the best back end for you.")]),t._v(" "),s("h2",{attrs:{id:"new-recent-articles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-recent-articles"}},[t._v("#")]),t._v(" New/Recent Articles")]),t._v(" "),s("RecentArticles")],1)}),[],!1,null,null,null);e.default=n.exports}}]);