package ar.com.anelsoftware.app.service.mapper;

import ar.com.anelsoftware.app.domain.*;
import ar.com.anelsoftware.app.service.dto.ProductoDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Producto and its DTO ProductoDTO.
 */
@Mapper(componentModel = "spring", uses = {EmpresaMapper.class, MarcaMapper.class, CategoriaMapper.class})
public interface ProductoMapper extends EntityMapper<ProductoDTO, Producto> {

    @Mapping(source = "empresa.id", target = "empresaId")
    @Mapping(source = "marca.id", target = "marcaId")
    @Mapping(source = "categoria.id", target = "categoriaId")
    ProductoDTO toDto(Producto producto);

    @Mapping(source = "empresaId", target = "empresa")
    @Mapping(source = "marcaId", target = "marca")
    @Mapping(source = "categoriaId", target = "categoria")
    Producto toEntity(ProductoDTO productoDTO);

    default Producto fromId(Long id) {
        if (id == null) {
            return null;
        }
        Producto producto = new Producto();
        producto.setId(id);
        return producto;
    }
}
