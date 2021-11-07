using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.Options;
using JewelleryApi.Models;
using JewelleryApi.Services;
using JewelleryApi.DatabaseSettings;

namespace JewelleryApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "JewelleryApi", Version = "v1" });
            });

            services.Configure<JewelleryDatabaseSettings>(
                Configuration.GetSection(nameof(JewelleryDatabaseSettings))
            );

            services.AddSingleton<IJewelleryDatabaseSettings>(
                sp => sp.GetRequiredService<IOptions<JewelleryDatabaseSettings>>().Value
            );

            services.AddSingleton<BraceletService>();
            services.AddSingleton<NecklaceService>();
            services.AddSingleton<RingService>();

            services.AddCors(
                options =>
                {
                    options.AddPolicy("AllowAny",
                        builder => builder
                            .AllowAnyOrigin()
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                    );
                }
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "JewelleryApi v1"));
            }

            DefaultFilesOptions newOptions = new DefaultFilesOptions();
            newOptions.DefaultFileNames.Append("index.html");
            app.UseDefaultFiles(newOptions);

            app.UseStaticFiles();

            app.UseCors("AllowAny");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
