package ar.com.anelsoftware.app.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import ar.com.anelsoftware.app.domain.enumeration.Estado;

/**
 * A Producto.
 */
@Entity
@Table(name = "producto")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "producto")
public class Producto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "nombre", nullable = false)
    private String nombre;

    @NotNull
    @Column(name = "precio", precision = 10, scale = 2, nullable = false)
    private BigDecimal precio;

    @NotNull
    @Min(value = 0)
    @Column(name = "stock", nullable = false)
    private Integer stock;

    @NotNull
    @Column(name = "detalle", nullable = false)
    private String detalle;

    @Column(name = "visible")
    private Boolean visible;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false)
    private Estado estado;

    @OneToMany(mappedBy = "producto")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Marca> marcas = new HashSet<>();

    @OneToMany(mappedBy = "producto")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Categoria> categorias = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public Producto nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public BigDecimal getPrecio() {
        return precio;
    }

    public Producto precio(BigDecimal precio) {
        this.precio = precio;
        return this;
    }

    public void setPrecio(BigDecimal precio) {
        this.precio = precio;
    }

    public Integer getStock() {
        return stock;
    }

    public Producto stock(Integer stock) {
        this.stock = stock;
        return this;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getDetalle() {
        return detalle;
    }

    public Producto detalle(String detalle) {
        this.detalle = detalle;
        return this;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    public Boolean isVisible() {
        return visible;
    }

    public Producto visible(Boolean visible) {
        this.visible = visible;
        return this;
    }

    public void setVisible(Boolean visible) {
        this.visible = visible;
    }

    public Estado getEstado() {
        return estado;
    }

    public Producto estado(Estado estado) {
        this.estado = estado;
        return this;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public Set<Marca> getMarcas() {
        return marcas;
    }

    public Producto marcas(Set<Marca> marcas) {
        this.marcas = marcas;
        return this;
    }

    public Producto addMarca(Marca marca) {
        this.marcas.add(marca);
        marca.setProducto(this);
        return this;
    }

    public Producto removeMarca(Marca marca) {
        this.marcas.remove(marca);
        marca.setProducto(null);
        return this;
    }

    public void setMarcas(Set<Marca> marcas) {
        this.marcas = marcas;
    }

    public Set<Categoria> getCategorias() {
        return categorias;
    }

    public Producto categorias(Set<Categoria> categorias) {
        this.categorias = categorias;
        return this;
    }

    public Producto addCategoria(Categoria categoria) {
        this.categorias.add(categoria);
        categoria.setProducto(this);
        return this;
    }

    public Producto removeCategoria(Categoria categoria) {
        this.categorias.remove(categoria);
        categoria.setProducto(null);
        return this;
    }

    public void setCategorias(Set<Categoria> categorias) {
        this.categorias = categorias;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Producto producto = (Producto) o;
        if (producto.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), producto.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Producto{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", precio=" + getPrecio() +
            ", stock=" + getStock() +
            ", detalle='" + getDetalle() + "'" +
            ", visible='" + isVisible() + "'" +
            ", estado='" + getEstado() + "'" +
            "}";
    }
}
