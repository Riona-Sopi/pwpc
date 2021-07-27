using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeeRegisterAPI.Models
{
    public class ProductModel
    {
        [Key]
        public int ProductID { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string ProductTitle { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ProductDescription { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string MaximumThickness { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string MinimumThickness { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string MaximumWidth { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string MinimumWidth { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string MaximumLength { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string MinimumLength { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }

        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }

    }
}
