#pragma checksum "D:\VS Projects\AspDotNetCoreSampleWebApp\AspDotNetCoreSampleWebApp\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "fa4440946eb380d0adfd4d9816597e19c36c9a09"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspDotNetCoreSampleWebApp.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
namespace AspDotNetCoreSampleWebApp.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\VS Projects\AspDotNetCoreSampleWebApp\AspDotNetCoreSampleWebApp\Pages\_ViewImports.cshtml"
using AspDotNetCoreSampleWebApp;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fa4440946eb380d0adfd4d9816597e19c36c9a09", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9ac3813d7307ca4692ce291e615e0d24b3185ff3", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "D:\VS Projects\AspDotNetCoreSampleWebApp\AspDotNetCoreSampleWebApp\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <h1>Welcome to the ASP.NET Core Sample Web App</h1>\r\n    <h4>Created by Shadikul</h4>\r\n    <p>Learn about <a href=\"https://docs.microsoft.com/aspnet/core\">building Web apps with ASP.NET Core</a>.</p>\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591